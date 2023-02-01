import React from "react";
import { useToggle } from "../hooks/useToggle";

export const Togglable = ({ children, name }) => {
  const [visible, toggle] = useToggle();
  console.log(visible)
  let isOpen = visible ? "open" : "close";
  let isShopOpen = visible ? "open" : "close";
  return (
    <div className="toggle">
      <div className="show" type="button" onClick={toggle}>
        {name}
        {visible ? children(isOpen, isShopOpen) : children(isOpen, isShopOpen)}
      </div>
    </div>
  );
};
