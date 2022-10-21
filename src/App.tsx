import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import SwitchThemeButton from "./components/Main/SwitchThemeButton";
import { Router } from "./utils/Router";

interface IAppContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  modalName: string;
  setModalName: Dispatch<SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | null>(null);

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [modalName, setModalName] = useState("lobby");
  const [modalVisible, setModalVisibility] = useState<boolean>(false);

  useEffect(() => {
    console.log(modalName, modalVisible);
  }, [modalName, modalVisible])
  
  return (
    <div id="container" data-theme={theme}>
      <AppContext.Provider
        value={{
          theme,
          setTheme,
          modalName,
          setModalName,
          modalVisible,
          setModalVisibility,
        }}
      >
        <Router />
      </AppContext.Provider>
    </div>
  );
};

export { App, AppContext, IAppContext };
