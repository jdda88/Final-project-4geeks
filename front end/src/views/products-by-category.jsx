import React from "react";
import { useParams } from "react-router";
import { Card } from "../components/card";
import { useCategory } from "../hooks/useCategory";
import { GoblalButton } from "../components/generalbutton";
import { useCart } from "../hooks/useCart";
import BarLoader from "react-spinners/BarLoader";
import "../style/spinner.css";

export const Categories = () => {
  const { category } = useParams();
  const { data, loading } = useCategory(category);
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
                description={info.description}
                adding={addToCart}
                info={info}
              />
              <GoblalButton
                name={"See More"}
                path={`/products/id/${info.id}`}
              />
            </div>
          );
        })
      )}
    </div>
  );
};
