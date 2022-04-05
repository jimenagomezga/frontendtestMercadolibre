import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Product.css";
import iconCard from "../../assets/ic_shipping@2x.png.png.png";

function Product({
  id,
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
            <Link to={`/items/${id}`}>
              <p className="price">
                $ {price_currency_id}{" "}
                {new Intl.NumberFormat("es-AR").format(price)}
                {price_decimals}
              </p>
            </Link>
            <p className="freeShipping">
              {free_shipping === true ? <img src={iconCard} alt="" /> : null}
            </p>
          </div>
          <p className="title">{title}</p>
          <p className="condition">Producto: {condition}</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
