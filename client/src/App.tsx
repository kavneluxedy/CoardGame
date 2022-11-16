import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import { AppContext } from "./utils/ContextProvider";
import { Router } from "./utils/Router";

interface IFormError {
	error: boolean,
	result: [
		{
			errorFlag: string,
			errorMessage: string,
			result: string,
		}
	]
}

interface IUser {
	isConnected?: boolean,
	session?: string
}

interface IAppContext {
	userSession: IUser,
	setUserSession: Dispatch<SetStateAction<IUser>>;
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
	modalName: string;
	setModalName: Dispatch<SetStateAction<string>>;
	modalVisible: boolean;
	setModalVisibility: Dispatch<SetStateAction<boolean>>;
	formError?: IFormError;
	setFormError: Dispatch<SetStateAction<IFormError | undefined>>;
}


const App = (): JSX.Element => {
	const [userSession, setUserSession] = useState<{}>({});
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [modalName, setModalName] = useState("lobby");
	const [modalVisible, setModalVisibility] = useState<boolean>(false);
	const [formError, setFormError] = useState<IFormError>();

	return (
		<div id="container" data-theme={theme}>
			<AppContext.Provider
				value={{
					userSession,
					setUserSession,
					theme,
					setTheme,
					modalName,
					setModalName,
					modalVisible,
					setModalVisibility,
					formError,
					setFormError,
				}}
			>
				<Router />
			</AppContext.Provider>
		</div>
	);
};

export { App, AppContext, IAppContext };
