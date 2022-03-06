import React from "react";
import ProductDetail from "../../components/Results/ProductDetail";

export const nose = ({ data, description }) => {
  return (
    <section>
      <div className="contencCardComplete">
        {data?.item?.map((data) => {
          return (
            <ProductDetail
              key={data.id}
              title={data.title}
              price={data.price.amount}
              price_decimals={data.price.decimals}
              price_currency={data.price.currency_id}
              picture={data.thumbnail}
              condition={data.condition}
              free_shipping={data.shipping.free_shipping}
              sold_quantity={data.old_quantity}
              description={description.data.plain_text}
            />
          );
        })}
      </div>
    </section>
  );
};
