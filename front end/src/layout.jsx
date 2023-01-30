import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.jsx";
import { Specificproduct } from "./views/specificproduct";
import { Products } from "./views/allproducts.jsx";
import { Categories } from "./views/products-by-category.jsx";

function Layout() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/products/" element={<Products />} />
          <Route exact path="/products/:category" element={<Categories />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/products/id/:id" element={<Specificproduct />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default Layout;
