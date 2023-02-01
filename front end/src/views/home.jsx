import React from "react";
import { Jumbotron } from "../components/jumbotron";
import { Card } from "../components/card";
import { GoblalButton } from "../components/generalbutton";
import { useCategories } from "../hooks/useCategories";
import BarLoader from "react-spinners/BarLoader";
import '../style/spinner.css'


export const Home = () => {
  const { data, loading } = useCategories();

  return (
    <div>
      <Jumbotron />

      {loading ? (
        <div className="spinner">
          <BarLoader color="#f09d51" />
        </div>
      ) : (
        data?.map((name, index) => {
          //console.log(name);
          return (
            <div className="card-button" key={index}>
              <Card name={name} index={index} />
              <GoblalButton name={name} path={`/products/${name}`} />
            </div>
          );
        })
      )}
    </div>

  );
};
