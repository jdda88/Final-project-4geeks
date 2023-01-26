import React, { useState } from "react";

export const useToggle = (initialValue = false) => {

  const [visible, setVisible] = useState(initialValue);

  const Show = () => setVisible(true);

  const Hide = () => setVisible(false)

  return [visible, Show, Hide];
};

