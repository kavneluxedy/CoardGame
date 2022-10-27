import React, { FormEvent, useContext, useEffect } from "react";
import { IAppContext, AppContext } from "../../App";
import { Comm } from "../Comm/comm";

const Login = ({ closeModal }: any) => {
	const {
		user,
		setUser,
		modalVisible,
		setModalVisibility,
		modalName,
		setModalName,
		formError,
		setFormError,
	} = useContext<IAppContext>(AppContext);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let user: Object = {
			nickname: e.target[0].value,
			password: e.target[1].value,
		};

		let result = await Comm("COARD", "User", { user: user }, "/api/auth");

		if (result.error) {
			setFormError({ ...result });
		} else {
			let user = result.result;
			console.log(user);
			closeModal();
			setFormError(undefined);
			setUser({ isConnected: true, nickname: user.nickname, role: user.role });
		}
	};

	const printError = (flag: string) => {
		if (!formError) return;
		if (formError.error) {
			var error: { errorMessage: string; errorFlag?: string; result?: string } =
				{ errorMessage: "" };

			formError.result.map((err) => {
				if (err.errorFlag === flag) {
					error = err;
				}
			});
			if (error.errorMessage === "") {
				return;
			}

			return (
				<>
					<div className="form-error">{error.errorMessage}</div>
				</>
			);
		}
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)} className="login-form">
				<label htmlFor="nickname">
					<input
						name="nickname"
						placeholder="nickname"
						id="nickname"
						required
					/>
					{printError("Pwd")}
				</label>
				<br />
				<label htmlFor="pwd">
					<input
						type="password"
						name="pwd"
						placeholder="password"
						id="pwd"
						required
					/>
				</label>
				<br />
				<button type="submit">Valider</button>
			</form>
		</>
	);
};

export default Login;
