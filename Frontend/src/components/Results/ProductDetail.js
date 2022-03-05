import React from "react";
import "../../styles/ProductDetail.css";

function ProductDetail({ picture, title, price, price_decimals }) {
  return (
    <div className="contentProductDetail">
      <div className="contentProductDetailPicture">
        <img src={picture} alt="imgproduct" />
        <div className="blockProductDetail">
          <h1 className="titleDetailPicture">{title}</h1>
          <p className="price">
            $ {price}
            {price_decimals}
          </p>
          <button> Comprar </button>
        </div>
        <p>descripcion</p>
      </div>
    </div>
  );
}

export default ProductDetail;
