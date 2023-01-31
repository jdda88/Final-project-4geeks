import React, { useEffect } from "react";
import { Card } from "../components/card";
import { useProducts } from "../hooks/useProducts";
import { GoblalButton } from "../components/generalbutton";
import { useCart } from "../hooks/useCart";
import BarLoader from "react-spinners/BarLoader";
import "../style/spinner.css";

export const Products = () => {
  const { data, loading } = useProducts();
  const [cart, addToCart, removeFromCart, getTotal] = useCart();

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        data?.map((info) => {
          //console.log(info);
          return (
            <div key={info.id}>
              <Card
                name={info.title}
                price={info.price}
                image={info.image}
                adding={addToCart}
                info={info}
              />
              <div className="all-product-btn">
                <GoblalButton
                  className="productsbutton"
                  name={"See More"}
                  path={`/products/id/${info.id}`}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
