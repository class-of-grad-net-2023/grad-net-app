import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import App from "./components/app";

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("main"));