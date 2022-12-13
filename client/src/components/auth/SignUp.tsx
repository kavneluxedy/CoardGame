import React from "react";
import FormSignUp from "./FormSignUp";
import useModal from "../../utils/hooks/useModal";
import Button from "../layout/misc/Button";

const SignUp = () => {

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
			<Modal title="Sign Up">
				<FormSignUp handleVisibility={handleVisibility} />
			</Modal>
		</>
	);
};

export default SignUp;
