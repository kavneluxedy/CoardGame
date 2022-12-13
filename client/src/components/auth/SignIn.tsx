import React from "react";
import FormSignIn from "./FormSignIn";
import useModal from "../../utils/hooks/useModal";
import Button from "../layout/misc/Button";

const SignIn = () => {

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
			<Modal title={"Sign In"}>
				<FormSignIn handleVisibility={handleVisibility} />
			</Modal>
		</>
	);
};

export default SignIn;
