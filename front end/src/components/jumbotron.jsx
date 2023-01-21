import React from "react";
import "../style/styles.css";
import { useNavigate } from "react-router";

export const Jumbotron = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="jumbotron">
        <div className="banner">
          <h1 className="banner-title">type of product</h1>
          <button className="banner-btn" onClick={()=>{navigate("/products")}}>Show all</button>
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
