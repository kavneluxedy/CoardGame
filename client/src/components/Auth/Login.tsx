import React, { FormEvent, useContext, useEffect } from "react";
import { AppContext } from "../../utils/ContextProvider";
import { Comm } from "../Comm/comm";

const Login = ({ closeModal }: any) => {

	const AppCtx = useContext(AppContext);
	if (AppCtx === null) { return }
	const {user, setUser, formError, setFormError} = {...AppCtx};
	
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let user: Object = {
			nickname: e.target[0].value,
			password: e.target[1].value,
		};

		let result = await Comm("COARD", "User", { user: user }, "/api/auth");

		(result.error)
			? setFormError({ ...result })
			: closeModal() && sessionStorage.setItem("userSession", JSON.stringify(formError?.result, null, '\t'));

		const session = localStorage.getItem('userSession')
		setUser({ isConnected: true, session: session! });
	};

	useEffect(() => {
		console.log(user)
	}, [user])


	const printError = (flag: string) => {
		if (!formError) return;
		if (formError.error) {
			var error: { errorMessage: string; errorFlag?: string; result?: string; } = { errorMessage: "" };

			formError.result.map((err) => {
				if (err.errorFlag === flag) {
					error = err;
				}
			});
			if (error.errorMessage === "") {
				return
			}

			return (
				<>
					<div className="form-error">{error.errorMessage}</div>
				</>
			)
		}
	}

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
					{printError("Name")}
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
