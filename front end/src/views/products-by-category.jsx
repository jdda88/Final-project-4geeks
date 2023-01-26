import React from "react";
import { useParams } from "react-router";
import { Nav } from "../components/navbar";
import { Card } from "../components/card";
import { useCategory } from "../hooks/useCategory";
import { GoblalButton } from "../components/generalbutton";

export const Categories = () => {
    
  const { category } = useParams();
  const data = useCategory(category)
  //console.log(categories);

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
