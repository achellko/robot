import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Shape, Circle } from "react-konva";
//import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(500, 500);
              context.lineTo(500, 300);
              context.quadraticCurveTo(400, 150, 300, 300);
              context.lineTo(300, 500);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
          />
          <Circle x={440} y={280} radius={15} fill="blue" />
          <Circle x={360} y={280} radius={15} fill="blue" />
          {/* { <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(450, 300);
              context.lineTo(220, 80);
              context.quadraticCurveTo(150, 100, 260, 170);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="red"
            stroke="black"
            strokeWidth={1}
          /> } */}
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById("root"));
