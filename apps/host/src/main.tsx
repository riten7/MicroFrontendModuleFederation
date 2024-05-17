import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import initStore from "./store";

const title = "with React, Micro Frontends and Webpack Module Federation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

initStore().then((Store) => {
  root.render(
    <Provider store={Store}>
      <App title={title}/>
    </Provider>
  );
});