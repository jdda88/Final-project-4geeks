import React from "react";
import { useStateValue } from "../context/stateProvider";
import "../style/shoppingcart.css";

export const ShoppingCart = ({ isOpen }) => {
  const [{ bag }, dispatch] = useStateValue();

  return (
    <div className="shoppingwrapper">
      <div className={`wrap-${isOpen}`}>
        <div className="shoppingmenu">
          <h2>Shopping Cart</h2>
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
