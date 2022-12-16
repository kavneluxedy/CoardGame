import React from "react";
import { ContextProvider } from "./utils/ContextProvider";
import Router from "./utils/Router";

const App = (): JSX.Element => {
	return (
		<ContextProvider>
			<Router />
		</ContextProvider>
	);
};

export default App;
