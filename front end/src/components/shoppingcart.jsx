import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);

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
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(e.target.item.value);
          e.target.item.value = "";
        }}
      >
        <input type="text" name="item" placeholder="Add item to cart" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingCart;
