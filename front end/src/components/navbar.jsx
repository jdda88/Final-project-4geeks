import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../style/styles.css";
import { Sidebar } from "./sidebar";

export const Nav = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon" onClick={() => setVisible(!visible)}>
            {/* Z index =1 on the CSS */}
          {visible ? <Sidebar /> : <i className="fas fa-bars"></i>}
        </span>
        {visible}

        <div
          type="button"
          className="Backtohome"
          onClick={() => {
            navigate("/");
          }}
        >
          <h1 className="logo">E-commerce site</h1>
        </div>
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
