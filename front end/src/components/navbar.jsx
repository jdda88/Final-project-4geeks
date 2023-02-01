import React from "react";
import { useNavigate } from "react-router";
import "../style/styles.css";
import { ShoppingCart } from "./shoppingcart";
import { Sidebar } from "./sidebar";
import { Togglable } from "./togglable";
import { handleToggle } from "../utils/handletoggle";

export const Nav = () => {
  const navigate = useNavigate();

  
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-icon" onClick={handleToggle}>
          <Togglable name={<i className="fas fa-bars"></i>}>
            {(isOpen) => <Sidebar isOpen={isOpen} />}
          </Togglable>
        </div>
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
          <div className="nav-icon" onClick={handleToggle}>
            <Togglable name={<i className="fas fa-cart-plus"></i>}>
              {(isShopOpen) => <ShoppingCart isOpen={isShopOpen} />}
            </Togglable>
          </div>
          <div className="cart-items">0</div>
        </div>
      </div>
    </nav>
  );
};
