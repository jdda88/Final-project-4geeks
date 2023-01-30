import React from "react";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";

export const Home = () => {

  const data = useCategories();
  //console.log(data)

  return (
    <>
      <Jumbotron />
      {data?.map((name, index) => {
        //console.log(name);
        return (
          <div key={index}>
            <Card name={name} index={index}/>
            <GoblalButton name={name} path={`/products/${name}`} />
          </div>
        );
      })}
    </>
  );
};
