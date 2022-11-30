import { ObjectId } from "mongodb";

export default interface ICard {
	_id?: ObjectId | string;
	name: string;
	cost: number;
	atk: number;
	def: number;
	hp: number;
	mp: number;
	effects: Array<string>;
	handImg: string | Blob | File | ArrayBuffer | null;
	boardImg: string | Blob | File | ArrayBuffer | null;
}
