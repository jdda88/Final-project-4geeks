import React from "react";
import "../style/styles.css";

export const Footer = () => {
  return (
    <footer className="navbar">
      <div className="navbar-center">
        <div className="cart-btn">
          <a href="https://github.com/UrbanWoman?tab=repositories" target='_blank' style={{textDecoration:'none', color:'black'}}>
            <i className="fa fa-github" style={{fontsize:'36px'}}></i> Rekiya
            Overstreet
          </a>
        </div>
        <div className="cart-btn">
          <a href="https://github.com/jdda88?tab=repositories" target='_blank' style={{textDecoration:'none', color:'black'}}>
            <i className="fa fa-github" style={{fontsize:'36px'}}></i> Juan
          </a>
        </div>
        <div className="cart-btn">
          <a href="https://github.com/Congrak?tab=repositories" target='_blank' style={{textDecoration:'none', color:'black'}}>
            <i className="fa fa-github" style={{fontsize:'36px'}}></i> Rodrigo
            Celis
          </a>
        </div>
      </div>
    </footer>
  );
};
