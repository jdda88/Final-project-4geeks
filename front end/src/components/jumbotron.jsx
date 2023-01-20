import React from "react";
import "../style/styles.css";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="banner">
          <h1 className="banner-title">type of product</h1>
          <button className="banner-btn">Show all</button>
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
