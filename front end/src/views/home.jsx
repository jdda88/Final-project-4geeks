import React from "react";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";

export const Home = () => {

  const data = useCategories();
  //console.log(data)

  return (
    <>
      <Nav />
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
      <Footer />
    </>
  );
};
