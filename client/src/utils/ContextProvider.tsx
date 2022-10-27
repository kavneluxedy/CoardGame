import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import IAppContext from "./Type/Interface/IAppContext";
import IFormError from "./Type/Interface/IFormError";

const AppContext = createContext<IAppContext | null>(null);

interface IContextProvider {
  children: ReactNode,
}
const ContexProvider = ({children}: IContextProvider) => {

  const [user, setUser] = useState<{}>({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [modalName, setModalName] = useState("lobby");
  const [modalVisible, setModalVisibility] = useState<boolean>(false);
  const [formError, setFormError] = useState<IFormError>();
  
  const AppContextContent: IAppContext = {
    user,
    setUser,
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