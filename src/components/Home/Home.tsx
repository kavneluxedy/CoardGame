import React from 'react';
import CreateRoom from './CreateRoom';
import CustomKing from './CustomKing';
import ModalPlay from '../Modals/ModalPlay';

const Home = () => {


	return (
		<>
			<div className="go-wrapper">
				<h3>GameOptions</h3>
				<CustomKing />
				<CreateRoom />
				<ModalPlay />
			</div>
		</>
	)
}

export default Home