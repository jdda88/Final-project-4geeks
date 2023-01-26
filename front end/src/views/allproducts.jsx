import React from "react";
import { Nav } from "../components/navbar";
import { Card } from "../components/card";
import { useProducts } from "../hooks/useProducts";
import { GoblalButton } from "../components/generalbutton";

export const Products = () => {

  const data = useProducts()

  return (
    <div>
      <Nav />
      {data?.map((info) => {
        //console.log(info);
        return (
          <div key={info.id}>
            <Card
              name={info.title}
              price={info.price}
              image={info.image}
              description={info.description}
            />
            <GoblalButton name={'See More'} path={`/products/id/${info.id}`} />
          </div>
        );
      })}
    </div>
  );
};