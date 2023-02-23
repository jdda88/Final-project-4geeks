import React from "react";
import { useStateValue } from "../context/stateProvider";

export const Checkout = () => {
  const [{ isLogged }] = useStateValue();

  return (
    <>
      {isLogged ? (
        <div>
          <div>
            Checkout
          </div>
        </div>
      ) : (
        <div> Error you not are logged</div>
      )}
    </>
  );
};
