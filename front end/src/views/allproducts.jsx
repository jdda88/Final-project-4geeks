import React from "react";
import { Nav } from "../components/navbar";
import { useState, useEffect } from "react";
import { Card } from "../components/card";
import { get_products } from "../service/fakestore";


export const Products = () => {
    
  const [products, setProducts] = useState();

  useEffect(() => {
    async function set() {
      let item = await get_products();
      setProducts(item);
    }
    set();

  }, []);

  return (
    <div>
      <Nav />
      {products?.map((info) => {
        console.log(info);
        return (
          <div>
            <Card
              key={info.id}
              name={info.title}
              price={info.price}
              image={info.image}
              description={info.description}
            />
          </div>
        );
      })}
    </div>
  );
};