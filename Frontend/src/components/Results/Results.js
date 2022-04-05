import "../../styles/Results.css";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";
import NoFound from "../NoFound/NoFound";

function Results({ data, loader, error }) {
  
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
        <p className="categoryResults">{category}</p>
        <div className="contentnProducts">
          {loader ? (
            <Loading />
          ) : data?.items?.length ? (
            data?.items?.map((item) => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price.amount}
                  price_decimals={item.price.decimals}
                  price_currency={item.price.currency_id}
                  picture={item.picture}
                  condition={item.condition}
                  free_shipping={item.free_shipping}
                />
              );
            })
          ) : error ? (
            <NoFound />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Results;
