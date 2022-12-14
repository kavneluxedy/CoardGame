import React, { FormEvent, useState } from "react";
import useDb from "../../../utils/hooks/useDb";
import Input from "../../layout/misc/Input";
import InputFile from "../../layout/misc/InputFile";
import ICard from "../../../utils/interfaces/ICard";
import Image from "image-js";

const CreateLand = ({ refresh }: { refresh: () => void }) => {

	const { dbComm } = useDb("COARD", "cards", {}, "/init");
	const [handImgData, setHandImgData] = useState<ArrayBuffer | string | null>(null);
	const [boardImgData, setBoardImgData] = useState<ArrayBuffer | string | null>(null);

	const handleImg = async (e, flag: string) => {
		let data = e.target.files[0];
		// console.log(Math.floor(data.size / 1024), " ko");
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
		let effects = String(e.target["EFFECTS"].value).split("//");
		let land: Partial<ICard> = {
			name: String(e.target["NAME"].value),
			cost: Number(e.target["COST"].value),
			effects: effects,
			handImgData: handImgData,
			boardImgData: boardImgData,
			type: "land"
		};

		dbComm("COARD", "cards", { card: land }, "/api/cards/create");
		refresh();
	};

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
			method="post"
			id="create-card-form"
			className="panel-container"
		>
			<Input type="text" id="NAME" />
			<Input type="number" id="COST" />
			<Input type="text" id="EFFECTS" required={false} />
			<InputFile
				id="BOARD_IMG"
				onChange={(e) => handleImg(e, "board")}
				className="file-input"
			/>
			<InputFile
				id="HAND_IMG"
				onChange={(e) => handleImg(e, "hand")}
				className="file-input"
			/>
			<Input
				type="submit"
				id="submit"
				className="panel-btn create-card-btn"
				defaultValue="✅"
			/>
		</form>
	);
};

export default CreateLand;
