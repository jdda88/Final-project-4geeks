import React from "react";
import { Nav } from "../components/navbar";
import { Card } from "../components/card";
import { useParams } from "react-router";
import { GoblalButton } from "../components/generalbutton";
import { useProduct } from "../hooks/useProduct";

export const Specificproduct = () => {
  const { id } = useParams();
  const data = useProduct(id);

  return (
    <div>
      <Nav />
      <Card
        name={data?.title}
        price={data?.price}
        image={data?.image}
        description={data?.description}
      />
        <GoblalButton name={"More Products"} path={`/products`} />
        <GoblalButton
          name={`More ${data?.category}`}
          path={`/products/${data?.category}`}
        />
    </div>
  );
};
