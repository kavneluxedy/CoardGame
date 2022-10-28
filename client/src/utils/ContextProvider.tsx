import React, {
  createContext,
  ReactNode,
  useState,
} from "react";
import IAppContext from "./Types/Interfaces/IAppContext";
import IFormError from "./Types/Interfaces/IFormError";
import IUser from "./Types/Interfaces/IUser";

const AppContext = createContext<IAppContext | null>(null);

interface IContextProvider {
  children: ReactNode
}
const ContexProvider = ({ children }: IContextProvider) => {

  const [user, setUser] = useState<IUser>(Object);
  const [modalName, setModalName] = useState("lobby");
  const [modalVisible, setModalVisibility] = useState<boolean>(false);
  const [formError, setFormError] = useState<IFormError>();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

export { AppContext };
export default ContexProvider;