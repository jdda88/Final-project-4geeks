import React, { useEffect } from "react";
import { Card } from "../components/card";
import { useProducts } from "../hooks/useProducts";
import { GoblalButton } from "../components/generalbutton";
import { useCart } from "../hooks/useCart";
import BarLoader from "react-spinners/BarLoader";
import "../style/spinner.css";

export const Products = () => {

  const { data, loading } = useProducts();
  const [ cart, addToCart ] = useCart();
  const MAX_PRODUCT_NAME_LENGTH = 20;

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        <div className="home-body">
          {data?.map((info) => {
            let truncatedName = info.title.slice(0, MAX_PRODUCT_NAME_LENGTH);
            if (truncatedName !== info.title) truncatedName += "...";
            return (
              <div className="card-product" key={info.id}>
                <div className="cardproductbody">
                  <Card
                    name={truncatedName}
                    price={info.price}
                    image={info.image}
                    adding={addToCart}
                    info={info}
                  />
                </div>

                <div className="all-product-btn">
                  <GoblalButton
                    className="productsbutton"
                    name={"See More"}
                    path={`/products/id/${info.id}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

