import { ObjectId } from "mongodb";

export default interface ICard {
  _id?: ObjectId;
  name: string;
  cost: number;
  atk: number;
  def: number;
  hp: number;
  mp: number;
  effects: Array<string>;
}
