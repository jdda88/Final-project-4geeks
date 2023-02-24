import React from "react";
import { useState } from "react";

export const TogglableCart = ({ children}) => {
  let isOpen = visible ? "open" : "close";
  //console.log(visible);
  return (
    <div>
      <span onClick={toggle}>
        {visible ? children : <i className="fas fa-bars"></i>}
      </span>
      <div className="toggle">
        <div className="show" type="button" >
          {name}
          {visible ? children(isOpen) : children(isOpen)}
        </div>
      </div>
    </div>
  );
};
