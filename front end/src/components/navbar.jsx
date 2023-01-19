import React from "react";
import "../style/styles.css"

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <i className="fas fa-bars"></i>
        </span>
        <h1 className="logo">E-commerce site</h1>
        <div className="cart-btn">
          <span className="nav-icon">
            <i className="fas fa-cart-plus"></i>
          </span>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
  );
};
