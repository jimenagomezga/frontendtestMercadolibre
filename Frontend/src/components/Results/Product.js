import React from "react";
//import { Link } from "react-router-dom";
//import ProductDetail from "./ProductDetail";
import "../../styles/Product.css";
import iconCard from "../../assets/ic_shipping@2x.png.png.png";

function Product({
  title,
  price,
  picture,
  free_shipping,
  condition,
  price_decimals,
  price_currency_id,
}) {
  return (
    <section>
      <div className="contentProduct">
        <div className="contentPicture">
          <img src={picture} alt="imgproduct" />
        </div>
        <div className="contentInfoProducto">
          <div className="contentFreeShippingandprice">
            <p className="price">
              {/* aca va el link del product detail */}$ {price_currency_id}{" "}
              {new Intl.NumberFormat("de-DE").format(price)}
              {price_decimals}
            </p>

            <p className="freeShipping">
              {free_shipping === true ? <img src={iconCard} alt="" /> : null}
            </p>
          </div>
          <p className="title">{title}</p>
          <p>{condition}</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
