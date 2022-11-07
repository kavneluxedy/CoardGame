import React, { FormEvent, useState, useEffect, MouseEvent } from "react";
import useDb from "../../utils/hooks/useDb";
import Input from "../Input";
import ICard from "../../utils/Interfaces/ICard";

const CreateCard = () => {
	const { loading, error, data, dbComm } = useDb("COARD", "cards", {}, "/init");
	const [handImgData, setHandImgData] = useState<ArrayBuffer | string | null>(null);
	const [boardImgData, setBoardImgData] = useState<ArrayBuffer | string | null>(null);

	const handleImg = (e, flag: string) => {
		e.preventDefault();
		let data = e.target.files[0];
		console.log(Math.floor(data.size / 1024), " ko");
		var fileReader = new FileReader();
		fileReader.onload = function (data) {
			switch (flag) {
				case "hand":
					setHandImgData(data!.target!.result);
					break;
				case "board":
					setBoardImgData(data!.target!.result);
					break;
			}
		};
		fileReader.readAsBinaryString(data);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let effects = String(e.target[6].value).split("//");
		let card: ICard = {
			name: String(e.target[0].value),
			cost: Number(e.target[1].value),
			atk: Number(e.target[2].value),
			def: Number(e.target[3].value),
			hp: Number(e.target[4].value),
			mp: Number(e.target[5].value),
			effects: effects,
			handImg: handImgData,
			boardImg: boardImgData,
		};
		console.log(card);

		dbComm("COARD", "cards", { card: card }, "/api/cards/create");
	};

	// useEffect(() => {
	// 	console.log(handImgData, typeof handImgData);
	// }, [handImgData]);

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
			method="post"
			id="create-card-form"
			className="panel-container"
		>
			<h2>CREATE CARD</h2>
			<Input type="text" id="NAME" />
			<Input type="number" id="COST" />
			<Input type="number" id="ATK" />
			<Input type="number" id="DEF" />
			<Input type="number" id="HP" />
			<Input type="number" id="MP" />
			<Input type="text" id="EFFECTS" />
			<Input
				type="file"
				id="BOARD_IMG"
				onChange={(e) => handleImg(e, "board")}
			/>
			<Input type="file" id="HAND_IMG" onChange={(e) => handleImg(e, "")} />
			<Input
				type="submit"
				id="submit"
				className="panel-btn create-card-btn"
				defaultValue="✅"
			/>
		</form>
	);
};

export default CreateCard;
