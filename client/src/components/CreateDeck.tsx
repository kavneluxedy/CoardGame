import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import useDb from '../utils/hooks/useDb';
import ICard from '../utils/interfaces/ICard';
import Button from './layout/misc/Button';
import Input from './layout/misc/Input';

const CreateDeck = ({ currentDeck, setCurrentDeck }: { currentDeck: Array<ICard>, setCurrentDeck: Dispatch<SetStateAction<ICard[]>> }) => {

	const { loading, data, dbComm } = useDb("COARD", "cards", {}, "/init");

	// const [deckName, setDeckName] = useState<string>("defaultName");

	// useEffect(()=>{console.log(deckName)}, [deckName])

	const handleDeckSubmission = () => {
		dbComm("COARD", "decks", { deckName: currentDeck }, "api/deck/create"); //TODO système de nommage de deck
	}

	const AddToDeck = (e: MouseEvent<HTMLButtonElement>, card: ICard) => {
		setCurrentDeck(deck => [...deck, card]);
	}

	const RemoveFromDeck = (e: MouseEvent<HTMLParagraphElement>, key: number) => {
		let deck = currentDeck;
		deck.splice(key, 1);
		setCurrentDeck([...deck]);
	}

	return (
		<>
			{(currentDeck.length > 0) &&
				<nav className="rightbar-wrapper">
					<div className="rightbar-deck">
						<div className="deck-management">
							<Input id="NOM DU DECK" type="text" onChange={e => { setDeckName(e.currentTarget.value) }} >{deckName}</Input>
							CARDS TO SEND TO DECK : {currentDeck.length}
							{currentDeck.map((card, key) => <p className="inline-card-editor" key={key} onClick={e => { RemoveFromDeck(e, key) }}>{`${card.cost} | ${card.name}`}<span className="remove-button"> 🗑️ </span></p>)}
						</div>
						<div className="editor-btn">
							<Button onClick={e => handleDeckSubmission()}>SAVE THE DECK</Button>
							<Button onClick={e => setCurrentDeck([])}>🗑️</Button>
						</div>
					</div>
				</nav>
			}
		</>
	)
}

export default CreateDeck