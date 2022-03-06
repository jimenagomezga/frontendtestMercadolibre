import "../../styles/Results.css";
import Product from "./Product";

function Results({ data }) {
  const category = data.categories?.map((cat) => {
    return (
      <li key={cat}>
        &nbsp;
        {cat}&nbsp;{">"}
      </li>
    );
  });

  return (
    <section>
      <div className="contentResults">
        <p>{category}</p>
        <div className="contentnProducts">
          {data?.items?.map((item) => {
            return (
              <Product
                key={item.id}
                title={item.title}
                price={item.price.amount}
                price_decimals={item.price.decimals}
                price_currency={item.price.currency_id}
                picture={item.picture}
                condition={item.condition}
                free_shipping={item.free_shipping}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Results;
