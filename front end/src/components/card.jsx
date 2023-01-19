import React, { useEffect } from "react";
import '../style/styles.css'

export const Card = () =>{

    return(
        <div><div className="product">
        <div className="img-container">
          <img
            src="./images/activewear cat.jpeg"
            alt="product"
            className="product-img"
          />
          <button className="bag-btn" data-id="1">
            <i className="fas fa-shopping-cart"></i>
            add to bag
          </button>
        </div>
        <h3>activewear</h3>
        <h4>$ price here</h4>
      </div></div>
    )
}