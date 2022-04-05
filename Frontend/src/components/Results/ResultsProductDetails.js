import React, { useState, useEffect } from "react";
import ProductDetail from "../../components/Results/ProductDetail";
import "../../styles/ResultsProductDetails.css";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function ResultsProductDetails({ data }) {
  const [item, setItem] = useState([]);
  const [loaderDetails, setLoaderDetails] = useState(true);
  const { itemid } = useParams();

  const handleProductDetail = async () => {
    try {
      let res = await fetch(`http://localhost:7000/api/items/${itemid}`);
      setLoaderDetails(true);
      const data = await res.json();
      setItem(data.item);
      setLoaderDetails(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleProductDetail();
  }, []);

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
      <div className="contentResult">
        <p className="categoryContentProduct">{category}</p>
        <div className="contencCardComplete">
          {loaderDetails ? (
            <Loading />
          ) : (
            item && (
              <ProductDetail
                key={item.id}
                title={item.title}
                price={item.price?.amount}
                price_decimals={item.price?.decimals}
                price_currency={item.price?.currency_id}
                picture={item.picture}
                condition={item.condition}
                free_shipping={item.free_shipping}
                sold_quantity={item.sold_quantity}
                description={item.description}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ResultsProductDetails;
