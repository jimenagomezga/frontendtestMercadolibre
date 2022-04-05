import React from "react";
import "../../styles/ProductDetail.css";

function ProductDetail({
  title,
  price,
  picture,
  price_currency,
  price_decimals,
  description,
  condition,
  sold_quantity,
}) {
  return (
    <div className="contentResultProductDetail">
      <div className="contentProductDetail">
        <div className="contentbox1">
          <img src={picture} alt="imgproduct" />
          <p className="titleDescrition"> Descripcion del producto</p>
          <p className="contentDesciption">{description}</p>
        </div>
        <div className="contentbox2">
          <p className="infoCondition">
            Producto: {condition} - {sold_quantity} vendidos
          </p>
          <h1 className="titleProductDetail">{title}</h1>
          <p className="priceDescription">
            $ {price_currency} {new Intl.NumberFormat("es-AR").format(price)}
            {price_decimals}
          </p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
