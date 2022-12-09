import { DataArray } from "image-js";
import { ObjectId } from "mongodb";

interface ICard {
    _id: ObjectId;
    name: string;
    cost: number;
    atk: number;
    def: number;
    hp: number;
    mp: number;
    range: number;
    effects: Array<string>;
    handImg: string | DataArray;
    boardImg: string | DataArray;
}