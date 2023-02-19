import React from "react";
import { Card } from "../components/card";
import { useParams } from "react-router";
import { GoblalButton } from "../components/generalbutton";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";
import BarLoader from "react-spinners/BarLoader";
import "../style/spinner.css";

export const Specificproduct = () => {
  const { id } = useParams();
  const { data, loading } = useProduct(id);
  const [cart, addToCart, removeFromCart, getTotal] = useCart();

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        <div className="cardproductbody">
          <Card
            name={data?.title}
            price={data?.price}
            image={data?.image}
            description={data?.description}
            adding={addToCart}
            info={data}
          />
          <GoblalButton name={"More Products"} path={`/products`} />
          <GoblalButton
            name={`More ${data?.category}`}
            path={`/products/${data?.category}`}
          />
        </div>
      )}
    </div>
  );
};
