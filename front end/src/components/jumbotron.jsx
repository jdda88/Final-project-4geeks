import React from "react";
import "../style/styles.css";
import "../style/sidebar.css";
import { GoblalButton } from "./generalbutton";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="banner">
          <h1 className="banner-title">type of product</h1>
          <GoblalButton name={"Show All"} path={"/products"} />
        </div>
      </div>

      <div className="categories">
        <div className="section-title">
          <h2>our products</h2>
        </div>
      </div>
    </div>
  );
};
