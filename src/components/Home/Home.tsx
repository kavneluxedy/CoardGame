import React from 'react'
import CreatePrivateRoom from '../Home/CreatePrivateRoom'
import CustomKing from './CustomKing'
import ModalPlay from '../Modals/ModalPlay'

const Home = () => {

	return (
		<>
			<div className="go-wrapper">
				<h3>GameOptions</h3>
				<CustomKing />
				<CreatePrivateRoom />
				<ModalPlay />
			</div>
		</>
	)
}

export default Home