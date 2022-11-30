import React from "react";
import Login from "../auth/Login";
import useModal from "../../utils/hooks/useModal";
import Button from "../Button";

const MainLogin = () => {

	const { handleVisibility, Modal } = useModal();

	return (
		<>
			<Button
				className="open button"
				onClick={() => {
					handleVisibility();
				}}
			>
				SE CONNECTER
			</Button>
			<Modal>
				<Login handleVisibility={handleVisibility} />
			</Modal>
		</>
	);
};

export default MainLogin;
