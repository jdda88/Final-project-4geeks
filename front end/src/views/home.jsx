import React, { useEffect } from "react";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";
import {Footer} from "../components/footer";
import BarLoader from "react-spinners/BarLoader";
import "../style/spinner.css";
import "../style/homepage.css";

export const Home = () => {
  const { data, loading } = useCategories();

  return (
    <div className="home-page">
      <Jumbotron />
      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        <div className="home-body">
          {data?.map((name, index) => {
            //console.log(name);
            return (
              <div className="card-product-home" key={index}>
                <Card index={index} />
                <GoblalButton className="banner-btn" name={name} path={`/products/${name}`} />
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};
