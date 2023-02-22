import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.jsx";
import { Specificproduct } from "./views/specificproduct";
import { Products } from "./views/allproducts.jsx";
import { Categories } from "./views/products-by-category.jsx";
import { Nav } from "./components/navbar.jsx";
import "../src/style/styles.css";
import { Register } from "./components/register.jsx";
import { Login } from "./components/login.jsx";
import { Profile } from "./views/profile.jsx";

function Layout() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/products/" element={<Products />} />
          <Route exact path="/products/:category" element={<Categories />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/products/id/:id" element={<Specificproduct />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/me" element={<Profile />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
