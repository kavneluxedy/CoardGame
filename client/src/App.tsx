import React from "react";
import ContexProvider from "./utils/ContextProvider";
import { Router } from "./utils/Router";


const App = (): JSX.Element => {

	return (
		<ContexProvider>
			<Router />
		</ContexProvider>
	);
};

export default App;
