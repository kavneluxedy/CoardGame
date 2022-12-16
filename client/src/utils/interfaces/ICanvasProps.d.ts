import ICell from "./ICell";

export default interface ICanvasProps {
    id: string;
    width?: number;
    height?: number;
    cells: ICell[][];
}