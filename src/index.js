import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <App saludo="Holi" nombre="Nath" />,
  document.getElementById("root")
);
// ReactDOM.createPortal(<App />, document.getElementById("modal"));
