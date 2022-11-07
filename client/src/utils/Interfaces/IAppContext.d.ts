import { Dispatch, SetStateAction } from "react";
import IUser from "./IUser";
import IFormError from "./IFormError";
import keyLangType from "../types/TkeyLangType";

export default interface IAppContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  modalName: string;
  setModalName: Dispatch<SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
  formError?: IFormError;
  setFormError: Dispatch<SetStateAction<IFormError | undefined>>;
  setLang: Dispatch<SetStateAction<keyLangType>>;
  translate: (text: string) => string;
}