import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import SwitchThemeButton from "./components/Main/SwitchThemeButton";
import { Router } from "./utils/Router";

interface IAppContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | null>(null);

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [modalVisible, setModalVisibility] = useState<boolean>(false);

  return (
    <div id="container" data-theme={theme}>
      <AppContext.Provider
        value={{
          theme,
          setTheme,
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
