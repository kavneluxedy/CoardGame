import React from 'react';
import CreateRoom from './CreateRoom';
import CustomKing from './CustomKing';
import ModalPlay from './modals/ModalPlay';

const Home = () => {

	const customKing = () => {
		return
	}

	return (
		<>
			<div className="go-wrapper">
				<h3>GameOptions</h3>
				<label htmlFor="nickname">Nickname: </label><input type="text" id="nickname"></input>
				<CustomKing />
				<CreateRoom />
				<ModalPlay />
			</div>
		</>
	)
}

export default Home