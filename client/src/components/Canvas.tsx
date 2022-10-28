import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { ICell } from "../utils/CellsInit";

type TCanvasProps = {
  id: string;
  width?: number;
  height?: number;
  cells: ICell[][];
};

const Canvas = (props: TCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [locateMouse, setLocateMouse] = useState({ x: NaN, y: NaN });

  /**
   * The `drawLine` function is used for drawing lines on canvas.
   * @context `required` `canvas.getContext()` the canvas context.
   * @endX `required` `number` the end destination coordonates on horizontal canvas axis.
   * @endY `required` `number` the end destination coordonates on vertical canvas axis.
   * @startX `optional` `number` the start coordonates on horizontal canvas axis. Set to 0 by default.
   * @startY `optional` `number` the start coordonates on vertical canvas axis. Set to 0 by default.
   * @color `optional` `string` the color of the line, must be a hexadecimal, rgb, or rgba format.
  **/

  function drawText(
    ctx: CanvasRenderingContext2D,
    posX = 0,
    posY = 0,
    text = "hello",
    color = "#000000",
    font = "30px cambria"
  ): void {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(text, posX, posY);
  }

  function drawLine(
    context: CanvasRenderingContext2D,
    endX: number,
    endY: number,
    startX = 0,
    startY = 0,
    color = "#000"
  ) {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
    context.closePath();
  }

  const drawGrid = (
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    cells: ICell[][]
  ) => {
    //   1485 width 135
    for (let x = 0; x < 11; x++) {
      drawLine(context, x * 135, canvas.height, x * 135, 0);
    }
    //   747 height 83
    for (let y = 0; y < 9; y++) {
      drawLine(context, canvas.width, y * 83, 0, y * 83);
    }
    cells.forEach((row, y) => {
      row.forEach((cell, x) => {
        drawText(context, (x + 1) * 135 - 68, (y + 1) * 83 - 42, cell.id);
      });
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (context !== null) {
      drawGrid(context, canvas, props.cells);
    }
  }, []);

  const handleClickCell = (canvas: HTMLCanvasElement, e: MouseEvent, cells) => {
    let rect = canvas.getBoundingClientRect();

    var absolutePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    var canvasCoords = {
      x: Math.floor(Math.abs(absolutePos.x / 135)),
      y: Math.floor(Math.abs(absolutePos.y / 83)),
    };

    let cell = cells[canvasCoords.y][canvasCoords.x];
    console.table(JSON.stringify(cell));
  };

  return (
    <>
      <span style={{ position: "fixed", zIndex: 0 }}>
        {/* DEBUG */}
        X: {locateMouse.x} Y: {locateMouse.y}
      </span>
      <canvas
        ref={canvasRef}
        id={props.id}
        width={props.width}
        height={props.height}
        onClick={(e) => {
          handleClickCell(e.currentTarget, e, props.cells);
        }}
        onMouseMove={(e) =>
          setLocateMouse({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        }
        onMouseLeave={(e) => {
          setLocateMouse({ x: NaN, y: NaN });
        }}
      />
    </>
  );
};

export default Canvas;
