<<<<<<< HEAD
import React from "react";
import { useStateValue } from "../context/stateProvider";
import "../style/shoppingcart.css";

export const ShoppingCart = ({ isOpen }) => {
  const [{ bag }, dispatch] = useStateValue();

  return (
    <div className="shoppingWrap">
      <div className={`wrap ${isOpen}`}>
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
=======
import React, { useState } from "react";
import { useEffect } from "react";

export const ShoppingCart = ({isOpen}) => {
  const [items, setItems] = useState([]);
  console.log(items)
  // useEffect(()=>{
  //   async function settingcart(){
  //     let newcart = 
    // }
  // })

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addItem(item)}>Add</button>

            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

>>>>>>> dcb8a4ebefb6e6336db7656b7a854b7fecdd8909
