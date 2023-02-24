import React from "react";
import "../style/styles.css";
import { GoblalButton } from "./generalbutton";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="banner">
          <h1 className="banner-title">View all products</h1>
          <GoblalButton name={"Show All"} path={"/products"} />
        </div>
      </div>

      <div className="categories">
        <div className="section-title">
          <h2>our Categories</h2>
        </div>
      </div>
    </div>
  );
};
