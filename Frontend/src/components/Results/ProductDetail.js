import React from "react";
import "../../styles/ProductDetail.css";
import phonephoto from "../../assets/16316442927856.jpeg";

function ProductDetail({ picture, title, price, price_decimals, data }) {
  // const category = data.categories?.map((cat) => {
  //   return (
  //     <li key={cat}>
  //       &nbsp;
  //       {cat}&nbsp;{">"}
  //     </li>
  //   );
  // });

  return (
    <div className="contentResultProductDetail">
      <p className="categoryContentProduct">Aca van las category</p>
      <div className="contentProductDetail">
        <div className="contentbox1">
          <img src={phonephoto} alt="imgproduct" />
          <p className="titleDescrition"> Descripcion del producto</p>
          <p className="contentDesciption">
            Tocando la parte superior de la cabeza de The Child Animatronic
            Edition activa más de 25 combinaciones de sonido y movimiento,
            incluyendo sonidos felices y emocionados, risas, balbuceos y más,
            todo mientras la cabeza de la figura se mueve hacia arriba y hacia
            abajo, las orejas se mueven hacia adelante y hacia atrás y los ojos
            abiertos y cerrados.
          </p>
        </div>
        <div className="contentbox2">
          <p className="infoCondition">Nuevo - 453 vendidos</p>
          <h1 className="titleProductDetail">Deco Reverse Sombrero Oxford</h1>
          <p className="priceDescription">$ 1.980</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

//bloque general que tiene un flex horixontal
//bloque 1 que contiene imagen y descripion verticalmente
//bloque 2 que contiene titulo, precio y boton vertical
