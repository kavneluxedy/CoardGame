import React, { FormEvent } from 'react'
import useDb from '../../utils/Hooks/useDb';
import Input from '../Input';
import ICard from '../../utils/Interfaces/ICard';
// import { ObjectId } from 'mongodb';

const CreateCard = () => {
	const { loading, error, data, dbComm } = useDb("COARD", "cards", {}, "/init");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let BoardImg = e.target["BOARD_IMG"].value;
		let HandImg = e.target["HAND_IMG"].value;
		let effects = String(e.target[6].value).split('//');
		let card: ICard = {
			name: String(e.target[0].value),
			cost: Number(e.target[1].value),
			atk: Number(e.target[2].value),
			def: Number(e.target[3].value),
			hp: Number(e.target[4].value),
			mp: Number(e.target[5].value),
			effects: effects,
		};

		dbComm("COARD", "cards", { card: card }, "/api/cards/create");
	}

	return (
		<form onSubmit={(e) => { handleSubmit(e) }} method="post" id="create-card-form" className='panel-container'>
			<h2>CREATE CARD</h2>
			<Input type="text" id="NAME" />
			<Input type="number" id="COST" />
			<Input type="number" id="ATK" />
			<Input type="number" id="DEF" />
			<Input type="number" id="HP" />
			<Input type="number" id="MP" />
			<Input type="text" id="EFFECTS" />
			<Input type="file" id="BOARD_IMG" />
			<Input type="file" id="HAND_IMG" />
			<Input type="submit" id="submit" className="panel-btn create-card-btn" defaultValue='✅' />
		</form>
	)
}

export default CreateCard