import React, { useEffect } from "react";
import { Nav } from "../components/navbar";
import { Card } from "../components/card";
import { useProducts } from "../hooks/useProducts";
import { GoblalButton } from "../components/generalbutton";
import { useCart } from "../hooks/useCart";

export const Products = () => {
  const data = useProducts();
  const [cart, addToCart, removeFromCart, getTotal] = useCart()

  return (
    <div>
      <Nav />
      {data?.map((info) => {
        //console.log(info);
        return (
          <div key={info.id}>
            <Card name={info.title} price={info.price} image={info.image} adding={addToCart} info={info}/>
            <div className="all-product-btn">
              <GoblalButton
                className ="productsbutton"
                name={"See More"}
                path={`/products/id/${info.id}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
