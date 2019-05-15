import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Stage, Layer, Shape, Circle, Rect } from "react-konva";
import App from "./app.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

render(<App />, document.getElementById("root"));
