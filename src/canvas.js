import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Shape, Circle, Rect, Text } from "react-konva";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.cref = React.createRef();
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={this.props.what} fontSize={15} />
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
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(500, 300);
              context.lineTo(600, 400);
              context.lineTo(500, 400);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={3}
          />
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(300, 300);
              context.lineTo(200, 400);
              context.lineTo(300, 400);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={3}
          />
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(500, 500);
              context.lineTo(500, 600);
              context.lineTo(450, 600);
              context.lineTo(450, 500);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={3}
          />
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(300, 500);
              context.lineTo(300, 600);
              context.lineTo(350, 600);
              context.lineTo(350, 500);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={3}
          />
          <Circle x={440} y={280} radius={15} fill="blue" />
          <Circle x={360} y={280} radius={15} fill="blue" />
        </Layer>
      </Stage>
    );
  }
}

export default Canvas;
