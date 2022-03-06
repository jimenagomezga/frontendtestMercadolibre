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
              $ {price_currency_id}{" "}
              {new Intl.NumberFormat("es-AR").format(price)}
              {price_decimals}
            </p>

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

// {data?.item?.map((data) => {
//   return (
//     <ProductDetail
//     key={data.id}
//     title={data.title}
//     price= {data.price.amount}
//     price_decimals={data.price.decimals}
//     price_currency={data.price.currency_id}
//     picture= {data.thumbnail}
//     condition= {data.condition}
//     free_shipping= {data.shipping.free_shipping}
//     sold_quantity= {data.old_quantity}
//     description= {description.data.plain_text}
//   />
//   )
//   })}
