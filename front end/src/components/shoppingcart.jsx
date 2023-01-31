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

