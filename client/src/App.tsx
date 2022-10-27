import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
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

/**
 * Different informations about the final user like as: 
 * 
 * {
 * 
 * isConnected: boolean 
 * 
 * user?: [ { } ],
 * 
 * role?: string,
 * 
 * }
 * */

interface IUser {
	isConnected: boolean,
	nickname?: string,
	role?: string,
}


interface IAppContext {
	user: IUser,
	setUser: Dispatch<SetStateAction<IUser>>;
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
	modalName: string;
	setModalName: Dispatch<SetStateAction<string>>;
	modalVisible: boolean;
	setModalVisibility: Dispatch<SetStateAction<boolean>>;
	formError?: IFormError;
	setFormError: Dispatch<SetStateAction<IFormError | undefined>>;
}

const AppContext = createContext<IAppContext | null>(null);

const App = (): JSX.Element => {
	const userSetup: IUser = localStorage.getItem("User") !== null ? JSON.parse(localStorage.getItem("User")!) : { isConnected: false };
	const [user, setUser] = useState(userSetup);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const [modalName, setModalName] = useState("lobby");
	const [modalVisible, setModalVisibility] = useState<boolean>(false);
	const [formError, setFormError] = useState<IFormError>();

	useEffect(() => {
		(user.isConnected) ? localStorage.setItem("User", JSON.stringify(user)) : localStorage.removeItem("User");
	}, [user]);

	return (
		<div id="container" data-theme={theme}>
			<AppContext.Provider
				value={{
					user: user,
					setUser: setUser,
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

export { App, AppContext, IAppContext, IUser };
