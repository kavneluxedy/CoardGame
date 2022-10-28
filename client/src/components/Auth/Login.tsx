import React, { FormEvent, useContext, useEffect } from "react";
import { AppContext } from "../../utils/ContextProvider";
import { Comm } from "../Comm/comm";

const Login = ({ closeModal }: any) => {

	const AppCtx = useContext(AppContext);
	// if (AppCtx === null) { return <></>; }
	const { user, setUser, formError, setFormError } = { ...AppCtx! };

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let userAuth: Object = {
			nickname: e.target[0].value,
			password: e.target[1].value,
		};

		let response = await Comm("COARD", "User", { user: userAuth }, "/api/auth");

		if (response.error) {
			setFormError({ ...response })
			console.log(formError)
		} else {
			let { nickname, mail, birthday, phone } = response.result;
			let obj = { nickname: nickname, mail: mail, birthday: birthday, phone: phone };
			let userSess = JSON.stringify(obj, null, "\t");

			setUser({ isConnected: true, session: userSess, role: response.result.role });
			closeModal();
		};
	}

	const save = (userSession: string) => {
		sessionStorage.setItem("user", userSession)
	}

	useEffect(() => {
		if (user.session !== undefined) {
			save(user.session);
		}
		console.table(user.session)
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
