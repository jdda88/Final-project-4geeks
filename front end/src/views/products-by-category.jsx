import React from "react";
import { useParams } from "react-router";
import { Nav } from "../components/navbar";
import { get_category } from "../service/fakestore";
import { useState, useEffect } from "react";
import { Card } from "../components/card";

export const Categories = () => {
    
  const { category } = useParams();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function set() {
      let item = await get_category(category);
      setCategories(item);
    }
    set();
  }, []);
  console.log(categories);

  return (
    <div>
      <Nav />
      {categories?.map((info) => {
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
