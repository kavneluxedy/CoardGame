import React from 'react'
import ModalPlayContent from './modals/ModalPlayContent';

// type Props = {}

const GameOptions = () => {

	function open() {
		const modalPlay = document.getElementById("modalPlay");
		const openBtn = document.getElementById("openBtn");
		if (modalPlay !== null && openBtn !== null) {
			openBtn.style.display = "none";
			modalPlay.style.display = "block";
		}
	}

	function close() {
		const modalPlay = document.getElementById("modalPlay");
		const openBtn = document.getElementById("openBtn");
		if (modalPlay !== null && openBtn !== null) {
			openBtn.style.display = "block";
			modalPlay.style.display = "none";
		}
	}

	const handleCustomizeKing = (e: any) => { console.log("Custom") }

	return (
		<>
			<div className="go-wrapper">
				<h3>GameOptions</h3>
				<label htmlFor="nickname">Nickname: </label><input type="text" id="nickname"></input>
				<br />
				<button onClick={e => handleCustomizeKing(e)} className="king-customize">
					<b>KING</b>
				</button>
				<br />
				<button>Create Private Room</button>
				<br />
				<button onClick={open} id="openBtn">PLAY</button>
				<div id="modalPlay" className="modal">

					{/* <!-- Modal content --> */}
					<div className="modal-content">
						<button className="closeBtn" onClick={close}>&times;</button>
						<ModalPlayContent />
					</div>

				</div>

			</div>

		</>
	)
}

export default GameOptions