import { Dispatch, SetStateAction } from "react";
import IUser from "./IUser";
import IFormError from "./IFormError";
import TColorTheme from "../types/TTheme";
import TKeyLangType from "../types/TKeyLang";

export default interface IAppContext {
	user: IUser;
	setUser: Dispatch<SetStateAction<IUser>>;
	colorTheme: TColorTheme;
	setColorTheme: Dispatch<SetStateAction<TColorTheme>>;
	modalVisible: boolean;
	setModalVisibility: Dispatch<SetStateAction<boolean>>;
	isLobbyVisible: boolean;
	setIsLobbyVisible: Dispatch<SetStateAction<boolean>>;
	formError?: IFormError;
	setFormError: Dispatch<SetStateAction<IFormError | undefined>>;
	setLang: Dispatch<SetStateAction<TKeyLangType>>;
	translate: (text: string) => string;
	dataMenuToggler: string;
	setDataMenuToggler: Dispatch<SetStateAction<string>>;
}