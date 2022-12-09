import React, { FormEvent, useContext, useEffect } from "react";
import AppContext from "../../utils/ContextProvider";
import Loading from "../Loading";
import useDb from "../../utils/hooks/useDb";

const Login = ({ handleVisibility }: any) => {
	const { loading, data, dbComm } = useDb("", "", {}, "/init");
	const AppCtx = useContext(AppContext);
	useEffect(() => {
		if (!loading) {
			handleDBResponse(data)
		}
	}, [data, loading])
	if (AppCtx === null) { return <></>; }
	const { user, setUser, formError, setFormError } = { ...AppCtx! };

	if (loading) { return <Loading /> }

	const handleDBResponse = (data) => {
		console.log(data);
		if (data.error) {
			setFormError({ ...data });
		} else {
			setFormError(undefined);
			if (data.result) {
				let { nickname, token, role } = data.result;
				setUser({ isConnected: true, nickname: nickname, role: role, token: token });
				handleVisibility();
			}
		}
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let userAuth: Object = {
			nickname: e.target[0].value,
			password: e.target[1].value,
		};

		dbComm("COARD", "User", { user: userAuth }, "/api/auth");
	}

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
