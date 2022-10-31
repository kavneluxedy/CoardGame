import React from "react";
import { Router } from "./utils/Router";
import ContexProvider from "./utils/ContextProvider";


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
