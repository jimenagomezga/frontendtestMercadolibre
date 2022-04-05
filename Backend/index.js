"use strict";

// Dependencias que se necesitan
const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios").default;
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// configurando el puerto para el servidor
const PORT = process.env.PORT || 7000;
//const buildPath = path.join(__dirname, "..", "client", "build");

// Objeto para contener los datos del autor
const author = {
  name: "Jimena",
  lastname: "Gomez",
};

// Express middlewares para seguridad, protección CORS y análisis del body
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
//app.use(express.static(path.resolve(buildPath)));

// Route de /items?search= endpoint
app.get("/api/items", async (req, res) => {
  // validar el parámetro de búsqueda
  const search = req.query.q;
  if (!search) {
    return res.status(404).json({ msg: "No results found" });
  }

  try {
    // Consumo the REST API para buscar los items
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    );

    //Validacion
    if (response.data.results.length === 0) {
      return res.status(404).json({ msg: "Sorry, No results found" });
    }

    // Filtrar y dar formato a los elementos encontrados

    const catIds = [
      ...new Set(response.data.results.map((item) => item.category_id)),
    ];

    let categories = await getCategoryById(catIds[0]);

    const items = response.data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });

    // Devolver los artículos encontrados en el formato deseado
    return res.status(200).json({
      author,
      categories,
      items,
    });
  } catch (error) {
    console.error(`Internal server error: ${error}`);
    return res.status(500).json({ msg: "Something went wrong" });
  }
});

// Route categories /categories/:id

const getCategoryById = async (id) => {
  const response = await axios.get(
    `https://api.mercadolibre.com/categories/${id}`
  );
  const data = response.data;
  const categories = data.path_from_root.map((category) => category.name);

  return categories;
};

//Route de /items/:id endpoint

app.get(
  "/api/items/:id",
  async (req, res) => {
    // validar el parámetro de id
    const itemid = req.params.id;
    if (!itemid) {
      return res.status(400).json({ msg: "No ID provided" });
    }

    try {
      // Consumo REST API para identificar id
      const response = await axios.get(
        `https://api.mercadolibre.com/items/${itemid}`
      );
      const description = await axios.get(
        `https://api.mercadolibre.com/items/${itemid}/description`
      );

      const data = response.data;
      const picture = data.pictures[0];
      const item = {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 0,
        },
        picture: picture.url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: description.data.plain_text,
      };

      // Devolver los artículos encontrados en el formato deseado
      return res.status(200).json({
        author,
        item,
      });
    } catch (error) {
      console.error(`Internal server error: ${error}`);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }

  //Todas las demás solicitudes GET que no se manejaron antes devolverán nuestra aplicación React
);

// app.get("*", (req, res) => {
//   console.log("loqueyoquiera");
//   res.sendFile(path.resolve(path.join(buildPath, "index.html")));
// })

// iniciar el servidor Express
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
