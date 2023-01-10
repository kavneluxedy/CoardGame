import React, { useState, useEffect, Dispatch, SetStateAction, MouseEvent } from 'react';
import useDb from '../utils/hooks/useDb';
import Button from './layout/misc/Button';
import Input from './layout/misc/Input';
import IDeck from '../utils/interfaces/IDeck';
import { ObjectId } from 'mongodb';

const CreateDeck = ({ currentDeck, setCurrentDeck }: { currentDeck: IDeck, setCurrentDeck: Dispatch<SetStateAction<IDeck>> }) => {
	const { loading, data, dbComm } = useDb("COARD", "cards", {}, "/init");

	const handleDeckSubmission = () => {
		if (currentDeck.content.length === 0) {
			return;
		}

		let objectIdList: Array<{ _id: ObjectId }> = [];
		currentDeck.content.forEach(card => {
			let id = card._id;
			if (id !== undefined) {
				objectIdList.push({ _id: id });
			}
		});
		if (objectIdList.length === 0) {
			return;
		}

		setCurrentDeck({ ...currentDeck, content: objectIdList });
	}

	const RemoveFromDeck = (e: MouseEvent<HTMLParagraphElement>, key: number) => {
		let deck = { ...currentDeck };
		deck.content.splice(key, 1);
		setCurrentDeck({ ...deck });
	}

	useEffect(() => {
		if (!currentDeck.content[0]?.name && currentDeck.content.length) {
			dbComm("COARD", "decks", { ...currentDeck }, "api/deck/create");
			setCurrentDeck({ name: "Default Deck", content: [], stats: { nbCards: 0, manaAvg: 0 } }); // Réinitialisation du deck
		}
	}, [currentDeck])

	return (
		<>
			{(currentDeck.content.length > 0) &&
				<nav className="rightbar-wrapper">
					<div className="rightbar-deck">

						<div className="deck-management">
							<Input id="NOM DU DECK" type="text" onChange={e => { setCurrentDeck({ ...currentDeck, name: e.currentTarget.value }) }} >
								{currentDeck.name}<br></br>
							</Input>
							CARDS TO SEND TO DECK : {currentDeck.content.length}
							{currentDeck.content.map((card, key) => <p className="inline-card-editor" key={key} onClick={e => { RemoveFromDeck(e, key) }}>{`${card["cost"]} | ${card["name"]}`}<span className="remove-button"> 🗑️ </span></p>)}
						</div>

						<div className="editor-btn">
							<Button onClick={e => handleDeckSubmission()}>SAVE THE DECK</Button>
							<Button onClick={e => setCurrentDeck({ name: "Default Deck", content: [] })}>🗑️</Button>
						</div>
					</div>
				</nav>
			}
		</>
	)
}

export default CreateDeck