import React from "react";
import { createRoot } from "react-dom/client";
import reducer, { initialState } from "./context/Reducer";
import { StateProvider } from "./context/stateProvider";
import Layout from "./layout";

const root = createRoot(document.querySelector("#root"));

//render your react application
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout />
    </StateProvider>
  </React.StrictMode>
);
