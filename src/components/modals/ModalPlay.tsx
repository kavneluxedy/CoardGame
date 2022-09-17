import React from 'react';
import ModalPlayContent from './ModalPlayContent';

const ModalPlay = (): JSX.Element => {

	function open() {
		const modalPlay = document.getElementById("modalPlay");
		const openBtn = document.getElementById("openBtn");
		if (modalPlay !== null && openBtn !== null) {
			modalPlay.style.display = "block";
		}
	}

	function close() {
		const modalPlay = document.getElementById("modalPlay");
		const openBtn = document.getElementById("openBtn");
		if (modalPlay !== null && openBtn !== null) {
			modalPlay.style.display = "none";
		}
	}

	return (
		<>
			<button onClick={open} id="openBtn">PLAY</button>

			<div id="modalPlay" className="modal">
				<div className="modal-content">
					<button className="closeBtn" onClick={close}>&times;</button>
					<ModalPlayContent />
				</div>
			</div>
		</>
	)
}

export default ModalPlay