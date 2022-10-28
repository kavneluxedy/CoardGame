import React, { createContext, Dispatch, SetStateAction } from "react";
import { Router } from "./utils/Router";
import ContexProvider from "./utils/ContextProvider";

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
 * }
 * */

interface IUser {
  isConnected?: boolean,
  session?: string,
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

const App = (): JSX.Element => {
  return (
    <div id="container">
      <ContexProvider>
        <Router />
      </ContexProvider>
    </div>
  );
};

export { App };
