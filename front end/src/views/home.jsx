import React from "react";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";
import "../style/home-card.css";

export const Home = () => {
  const data = useCategories();
  //console.log(data)

  return (
    <>
      <Nav />
      <Jumbotron />
      <div className="wrap-card">
        {data?.map((name, index) => {
          console.log(name);
          return (
            <div className="example-card" key={index}>
              <Card name={name} />
              <GoblalButton name={name} path={`/products/${name}`} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
