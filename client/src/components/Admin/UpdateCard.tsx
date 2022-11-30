import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../utils/ContextProvider'
import useDb from '../../utils/hooks/useDb'
import ICard from '../../utils/interfaces/ICard' // ! TODO
import Input from '../Input'
import Loading from '../Loading'

const CardEditor = ({ card, refresh }: { card: ICard, refresh: () => void }): JSX.Element => {
	const { loading, error, data, dbComm } = useDb("", "", {}, "/init");
	const AppCtx = useContext(AppContext);

	useEffect(() => {
		if (!loading) {
			handleDBResponse(data);
			console.log(data);
		}
	}, [data, loading])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let effects = String(e.target[6].value).split("//");
		let newCard: ICard = {
			_id: card._id,
			name: String(e.target[0].value),
			cost: Number(e.target[1].value),
			atk: Number(e.target[2].value),
			def: Number(e.target[3].value),
			hp: Number(e.target[4].value),
			mp: Number(e.target[5].value),
			effects: effects,
			// ! todo,
			handImg: "",
			boardImg: "",
		};
		dbComm("COARD", "cards", { card: newCard }, "/api/cards/update")
	}

	if (AppCtx === null) { return <></>; }

	const { formError, setFormError } = { ...AppCtx }

	if (loading) { return <Loading /> }

	const handleDBResponse = (data) => {
		console.log(data);
		if (data.error) {
			setFormError({ ...data });
			console.error(error);
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