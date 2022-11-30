import React from "react";
import Register from "../auth/Register";
import useModal from "../../utils/hooks/useModal";
import Button from "../Button";

const MainRegister = () => {

	const { handleVisibility, Modal } = useModal();

	return (
		<>
			<Button
				className="open button"
				onClick={() => {
					handleVisibility();
				}}
			>
				CREER UN COMPTE
			</Button>
			<Modal>
				<Register handleVisibility={handleVisibility} />
			</Modal>
		</>
	);
};

export default MainRegister;
