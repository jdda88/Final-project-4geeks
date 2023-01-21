import React, { useEffect } from "react";
import '../style/styles.css'




export const Card = ({name="", image="", price="", description="" }) =>{


    
    return(
        <div><div className="product">
        <div className="img-container">
          <img
            src={image}
            alt="product"
            className="product-img"
          />
          <button className="bag-btn" data-id="1">
            <i className="fas fa-shopping-cart"></i>
            add to bag
          </button>
        </div>
        <h3>{name}</h3>
        <h4>$ {price}</h4>
        <p className="">{description}</p>
      </div></div>
    )
}
