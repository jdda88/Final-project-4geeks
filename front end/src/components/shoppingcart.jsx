import React from "react";
import { useStateValue } from "../context/stateProvider";
import "../style/shoppingcart.css";

export const ShoppingCart = ({ isOpen }) => {
  const [{ bag }, dispatch] = useStateValue();

  console.log(isOpen)

  return (
    <div className="shoppingWrap">
      <div className={`bag ${isOpen}`}>
        <div className="shop">
          <div className="bagHead">
            <h2>Shopping Cart</h2>
          </div>
          <div className="bagBody">
            <ul>
              {bag?.map((item, index) => {
                //console.log(item);
                return (
                  <div key={index}>
                    <li>
                      {item.name}
                      <button>Remove</button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
