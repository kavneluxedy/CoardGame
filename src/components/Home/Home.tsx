import React, { useContext } from 'react'
import CardGameLobby from '../Lobby'
import GameOptionModal from '../GameOptionModal'
import { AppContext, IAppContext } from '../../App'
import Modal from '../Modal'
import Button from '../Button'

const Home = () => {

	const { modalVisible, setModalVisibility } = useContext<IAppContext>(AppContext)
	return (
		<>
			<Button className="open" onClick={() => setModalVisibility(true)}>MATCH PUBLIC</Button>
				<CardGameLobby />
		</>
	)
}
export { Home }