import React, {useState} from "react";
import { useStateValue } from "../context/stateProvider";
import { useCart } from "../hooks/useCart";
import "../style/shoppingcart.css";

export const ShoppingCart = ({ isOpen }) => {
  
  const [{ bag }, dispatch] = useStateValue();
  const [cart, removeFromCart] = useCart()
  const [list, setList] = useState([])

  const HandlerRemove = (id) => {
    const item = id
    removeFromCart(item)
  }
  console.log(bag)
  return (
    <div className="shoppingwrapper">
      <div className={`wrap ${isOpen}`}>
        <div className="shoppingmenu">
          <h2>Shopping Cart</h2>
        <div className="bagBody">
          <ul>
            {bag?.map((item, index) => {
              //console.log(item);
              return (
                <div key={index} >
                  <li>
                    {item.name}
                    <button id={item.id} onClick={() => HandlerRemove(item.id) }>X</button>
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