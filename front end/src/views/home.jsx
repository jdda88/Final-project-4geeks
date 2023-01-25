import React from "react";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { get_categories } from "../service/fakestore";
import { useEffect } from "react";
import { useState } from "react";
import { GoblalButton } from "../components/generalbutton";

export const Home = () => {
  const [categorieName, setCategorieName] = useState();

  useEffect(() => {
    async function set() {
      let categories = await get_categories();
      console.log(categories);
      setCategorieName(categories);
    }
    set();
  }, []);
  
  return (
    <>
      <Nav />
      <Jumbotron />
      {categorieName?.map((name, index) => {
        console.log(name);
        return (
          <div>
            <Card key={index} name={name} />

            <GoblalButton name={name} path={`/products/${name}`} />
          </div>
        );
      })}
      <Footer />
    </>
  );
};

