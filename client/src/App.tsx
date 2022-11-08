import React from "react";
import { Router } from "./utils/Router";
import ContexProvider from "./utils/ContextProvider";


const App = (): JSX.Element => {
	return (
		<ContexProvider>
			<Router />
		</ContexProvider>
	);
};

export { App };
