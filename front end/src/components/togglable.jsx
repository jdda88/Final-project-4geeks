import React from "react";
import { useToggle } from "../hooks/useToggle";

export const Togglable = ({ children, name }) => {
  const [visible, toggle] = useToggle();

  let isOpen = visible ? "open" : "close";

  return (
    <div className="toggle">
      <div className="show" type="button" onClick={toggle}>
        {name}
        {visible ? children(isOpen) : children(isOpen)}
      </div>
    </div>
  );
};
