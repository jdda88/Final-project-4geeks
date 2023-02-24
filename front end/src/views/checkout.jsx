import React from "react";
import { useStateValue } from "../context/stateProvider";

export const Checkout = () => {
  const [{ bag }] = useStateValue();
  const [{ isLogged }] = useStateValue();
  return (
    <>
      {isLogged ? (
        <div className="checkout-wrapper">
            <ul>
          {bag?.map((item, index) => {
            console.log(item,'from checkout')
            return (
                <div className="checkout-item" key={item.id}>
                    <li>
                        <div className="checkout-img">
                            <img scr={item.image} alt={item.name} />
                        </div>
                        <div className="cheackout-info">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        </div>
                    </li>
                </div>
            )
          })}
          </ul>
        </div>
      ) : (
        <div> Error you not are logged</div>
      )}
    </>
  );
};
