import React from "react";
import { useState } from "react";

export const Togglable = ({ children }) => {
  const [visible, setvisible] = useState(false);

  return (
    <div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
        {visible && <div>My element</div>}
      </div>
    </div>
  );
};
