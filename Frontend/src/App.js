import React, { useState, useEffect } from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";
import Header from "./components/Header/Header";
import Results from "../src/components/Results/Results";
import ProductDetail from "../src/components/Results/ProductDetail";

function App() {
  // Arreglo de datos, inicialmente vacio//
  const [data, setData] = useState([]);
  //valor del boton de busqueda, se actualiza en cada onChange//
  const [search, setSearch] = useState("");
  //arreglo de items
  //const [itemid, setItemid] = useState([]);
  //Description
  //const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:7000/api/items?q=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [search]);

  // useEffect(() => {
  //   fetch(`https://api.mercadolibre.com/items/${itemid}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.log(error));
  // }, [itemid]);

  return (
    <div className="App">
      <Header setSearch={setSearch} search={search} setData={setData} />

      <Results
        data={data}
        setData={setData}
        //setItemid={setItemid}
        //setDescription={setDescription}
      />
      <ProductDetail />
    </div>
  );
}

export default App;
