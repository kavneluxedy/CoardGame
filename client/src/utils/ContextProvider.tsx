import React, {
	createContext,
	ReactNode,
	useEffect,
	useState,
} from "react";
import IAppContext from "./interfaces/IAppContext";
import IFormError from "./interfaces/IFormError";
import IUser from "./interfaces/IUser";
import useDb from "./hooks/useDb";
import useTranslate from "./hooks/useTranslate";
import TColorTheme from "./types/TTheme";

const AppContext = createContext<IAppContext | null>(null);

interface IContextProvider {
	children: ReactNode
}

const ContexProvider = ({ children }: IContextProvider) => {
	useEffect(() => {
		var gotUser: string | null = localStorage.getItem("user");
		if (gotUser !== null) {
			var userInit: IUser = JSON.parse(gotUser);
			if (userInit.nickname !== undefined && userInit.token !== undefined) {
				const authUser = {
					nickname: userInit.nickname,
					token: userInit.token,
				}
				dbComm("COARD", "User", { user: authUser }, "/api/tokenAuth");
			}
		}
	}, [])

	const { loading, data, dbComm } = useDb("", "", {}, "/init");

	useEffect(() => {
		if (!loading) {
			handleDBResponse(data)
		}
	}, [data, loading])

	const handleDBResponse = (data) => {
		if (data.error === false) {
			let { nickname, token, role } = data.result;
			setUser({ isConnected: true, nickname: nickname, role: role, token: token });
		}
	}

	const getTheme = (str: string | null) => {
		var initTheme: TColorTheme
		if (str === "Light" || str === "Dark") {
			initTheme = str;
		} else {
			initTheme = "Light";
		}
		return initTheme;
	}

	const [user, setUser] = useState<IUser>({ isConnected: false });
	const [modalName, setModalName] = useState("lobby");
	const [modalVisible, setModalVisibility] = useState<boolean>(false);
	const [formError, setFormError] = useState<IFormError>();
	const [theme, setTheme] = useState<TColorTheme>(getTheme(localStorage.getItem("theme")));
	const [menuToggler, setMenuToggler] = useState<string>("none")
	const { setLang, translate } = useTranslate();

	useEffect(() => {
		console.log(menuToggler);
	}, [menuToggler])

	useEffect(() => {
		user.isConnected
			? localStorage.setItem("user", JSON.stringify(user))
			: localStorage.removeItem("user");
	}, [user])

	const AppContextContent: IAppContext = {
		user,
		setUser,
		colorTheme: theme,
		setColorTheme: setTheme,
		modalName,
		setModalName,
		modalVisible,
		setModalVisibility,
		formError,
		setFormError,
		setLang,
		translate,
		menuToggler,
		setMenuToggler,
	};

	return (
		<AppContext.Provider value={AppContextContent}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext };
export default ContexProvider;