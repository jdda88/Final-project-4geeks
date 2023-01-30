import React from "react";
import { Nav } from "../components/navbar";
import { Card } from "../components/card";
import { useParams } from "react-router";
import { GoblalButton } from "../components/generalbutton";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";

export const Specificproduct = () => {
  const { id } = useParams();
  const data = useProduct(id);
  const [cart, addToCart, removeFromCart, getTotal] = useCart()

  return (
    <div>
      <Nav />
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
  );
};
