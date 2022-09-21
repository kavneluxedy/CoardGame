import React, { Dispatch, useState } from 'react'
import CardGameLobby from '../Lobby'
import Modal from '../Modal'

interface IState {
	gameOptionsModal?: boolean
	showGameOptionsModal: Dispatch<React.SetStateAction<boolean>>
}

const Home = () => {
	const [gameOptionsModal, showGameOptionsModal] = useState<boolean>(false)
	const [lobbyModal, showLobbyModal] = useState<boolean>(false)

	const showLobby = (): void => {
		showGameOptionsModal(false)
	}

	return (
		<>
			<button className="home-button" onClick={() => showGameOptionsModal(true)} >PLAY</button>
			{gameOptionsModal && <Modal showGameOptionsModal={showGameOptionsModal} />}

			<button className="home-button" onClick={() => showLobbyModal(true)} >LOBBY</button>
			{lobbyModal && <CardGameLobby />}

		</>
	)
}
export { Home, IState }	