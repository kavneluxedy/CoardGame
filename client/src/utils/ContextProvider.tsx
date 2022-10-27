import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IUser {
  isConnected?: boolean,
  session?: string
}

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
const AppContext = createContext<IAppContext | null>(null);

interface IContextProvider {
  children: ReactNode,
}
const ContexProvider = ({children}: IContextProvider) => {

  const [userSession, setUserSession] = useState<{}>({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [modalName, setModalName] = useState("lobby");
  const [modalVisible, setModalVisibility] = useState<boolean>(false);
  const [formError, setFormError] = useState<IFormError>();
  
  const AppContextContent: IAppContext = {
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
  };

  return (
    <AppContext.Provider value={AppContextContent}>
      {children}
    </AppContext.Provider>
  );
};

export  {AppContext};
export default ContexProvider;