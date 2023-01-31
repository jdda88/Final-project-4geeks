import React from "react";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";
<<<<<<< HEAD
import BarLoader from "react-spinners/BarLoader";
import '../style/spinner.css'
=======
import "../style/home-card.css";
>>>>>>> dcb8a4ebefb6e6336db7656b7a854b7fecdd8909

export const Home = () => {
  const { data, loading } = useCategories();

  return (
    <div>
      <Jumbotron />
<<<<<<< HEAD
      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        data?.map((name, index) => {
          //console.log(name);
          return (
            <div key={index}>
              <Card name={name} index={index} />
              <GoblalButton name={name} path={`/products/${name}`} />
            </div>
          );
        })
      )}
    </div>
=======
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
>>>>>>> dcb8a4ebefb6e6336db7656b7a854b7fecdd8909
  );
};
