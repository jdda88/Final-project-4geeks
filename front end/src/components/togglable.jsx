import React from "react";
import { useState } from "react";
import { useToggle } from "../hooks/useToggle";

export const Togglable = ({ children, name }) => {
  const [visible, togglable] = useToggle();
  console.log(visible);
  let hidden = { display: visible ? "none" : "" };
  let show = { display: visible ? "" : "none" };
  return (
    <div className="toggle">
      <div className="prueba" style={hidden}>
        <div type="button"onClick={togglable} > 
          {name}
        </div>
      </div>
      <div className="prueba" style={show}>
        <div type="button" onClick={togglable}>{children}cancel</div>
      </div>
    </div>
  );
};
