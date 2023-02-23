import React from "react";
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/Reducer";
import "../style/shoppingcart.css";
import { GoblalButton } from "./generalbutton";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const ShoppingCart = ({ isOpen }) => {
  const [{ bag }, dispatch] = useStateValue(); //[{},{},{}]

  const removeFromCart = (item) => {
    // setCart(cart.filter((item) => item.id !== id));
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: item.id,
    });
  };

  console.log(bag);
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
                  <div key={index}>
                    <li>
                      {item.name}
                      <button id={item.id} onClick={() => removeFromCart(item)}>
                        X
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="shoppingCart-footer">
            <GoblalButton name={"Checkout"} />
          </div>
        </div>
      </div>
    </div>
    
  );
};
