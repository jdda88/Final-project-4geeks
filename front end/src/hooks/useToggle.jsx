import React, { useState } from "react";

export const useToggle = (initialValue = false) => {

  const [visible, setVisible] = useState(initialValue);

  const toggle = () => {
    setVisible(!visible)
    return visible
  }

  return [visible, toggle];
};

 