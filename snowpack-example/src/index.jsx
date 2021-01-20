import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { defineCustomElements } from "stencil-example/loader";

defineCustomElements();

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
