import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const title = "with React, Micro Frontends and Webpack Module Federation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App title={title}/>);