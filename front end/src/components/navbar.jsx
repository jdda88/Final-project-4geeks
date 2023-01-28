import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../style/styles.css";
import { Sidebar } from "./sidebar";
import { Togglable } from "./togglable";

export const Nav = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <Togglable />
        </span>
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
