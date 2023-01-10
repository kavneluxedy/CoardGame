import { ObjectId } from "mongodb";

export default interface ICard {
	_id: ObjectId;
	name: string;
	cost: number;
	atk: number;
	def: number;
	hp: number;
	mp: number;
	range: number;
	effects: Array<string>;
	handImgData?: ArrayBuffer | string | readonly string[] | null;
	boardImgData?: ArrayBuffer | string | readonly string[] | null;
	type: string;
}
