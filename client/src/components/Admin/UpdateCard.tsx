import React, { createRef, FormEvent, useContext, useEffect, useState } from 'react'
import AppContext from '../../utils/ContextProvider'
import useDb from '../../utils/hooks/useDb'
import ICard from '../../utils/interfaces/ICard'
import Input from '../Input'
import Loading from '../Loading'
import InputFile from '../InputFile'

const CardEditor = ({ card, refresh }: { card: ICard, refresh: () => void }): JSX.Element => {

	const [handImgData, setHandImgData] = useState<any>(card.handImgData);
	const [boardImgData, setBoardImgData] = useState<any>(card.boardImgData);

	const { loading, data, dbComm } = useDb("COARD", "cards", {}, "/init");
	const AppCtx = useContext(AppContext);

	useEffect(() => {
		if (!loading) {
			handleDBResponse(data);
		}
	}, [data, loading])

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
		let effects = String(e.target["EFFECTS"].value).split("//");
		let newCard: ICard = {
			_id: card._id,
			name: String(e.target["NAME"].value),
			cost: Number(e.target["COST"].value),
			atk: Number(e.target["ATK"].value),
			def: Number(e.target["DEF"].value),
			hp: Number(e.target["HP"].value),
			mp: Number(e.target["MP"].value),
			range: Number(e.target["RANGE"].value),
			effects: effects,
			handImgData: handImgData,
			boardImgData: boardImgData,
		};
		dbComm("COARD", "cards", { card: newCard }, "/api/cards/update")
	}

	if (AppCtx === null) { return <></>; }

	const { setFormError } = { ...AppCtx }

	if (loading) { return <Loading /> }

	const handleDBResponse = (data) => {
		if (data.error) {
			setFormError({ ...data });
		} else if (data.error === false) {
			setFormError(undefined);
			refresh();
		}
	}

	return (
		<form id="edit-card-form" onSubmit={e => handleSubmit(e)}>

			<Input type="string" id="NAME" defaultValue={card.name} className="" />

			<Input type="string" id="COST" defaultValue={card.cost} className="" />

			<Input type="number" id="ATK" defaultValue={card.atk} className="" />

			<Input type="number" id="DEF" defaultValue={card.def} className="" />

			<Input type="number" id="HP" defaultValue={card.hp} className="" />

			<Input type="number" id="MP" defaultValue={card.mp} className="" />

			<Input type="string" id="EFFECTS" defaultValue={card.effects} className="" />

			<Input type="number" id="RANGE" defaultValue={card.range} className="" />

			<Input type="string" id="EFFECTS" defaultValue={card.effects} className="" required={false} />

			<InputFile
				id="HAND_IMG"
				onChange={
					(e) => handleImg(e, "hand")
				}
				defaultValue={handImgData}
			/>

			<InputFile
				id="BOARD_IMG"
				onChange={
					(e) => handleImg(e, "board")
				}
				defaultValue={boardImgData}
			/>

			<input type="submit" id="submit" defaultValue={"submit"} className="panel-btn edit-card-btn" />

		</form>
	)
}

const UpdateCard = ({ card, refresh }: { card: ICard, refresh: () => void }): JSX.Element => {
	const [isCardEditing, setIsCardEditing] = useState<boolean>(false);
	const handleCardEditing = () => {
		(isCardEditing)
			? setIsCardEditing(false)
			: setIsCardEditing(true)
	}
	return (
		<>
			<button onClick={() => handleCardEditing()} className="panel-btn edit-card-btn">✏️</button>
			{isCardEditing &&
				<>
					<CardEditor card={card} refresh={refresh} />
				</>
			}
		</>
	)
}

export default UpdateCard