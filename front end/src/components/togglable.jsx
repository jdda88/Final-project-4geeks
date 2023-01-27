import React from "react";
import { useToggle } from "../hooks/useToggle";

export const Togglable = ({ children }) => {

  const {visible, toggle} = useToggle()

  return (
    <div>
        <span onClick={toggle}>
        {visible ? children : <i className="fas fa-bars"></i>}
        </span>
        <div>
          {visible}
        </div>
    </div>
  );
};
