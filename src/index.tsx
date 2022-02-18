import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RoutesApplication } from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApplication />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
