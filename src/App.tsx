import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import "./assets/css/App.css"
import SwitchThemeButton from "./components/Main/SwitchThemeButton"
import { Router } from "./utils/Router"

interface IAppContext {
	theme: string
}

const AppContext: any = createContext<IAppContext | null>(null)

const App = (): JSX.Element => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
	const [unlistedMatch, switchUnlistedMatch] = useState(false)

	return (
		<div className="app" data-theme={theme}>
			<AppContext.Provider value={{ theme, setTheme, unlistedMatch, switchUnlistedMatch }}>
				<SwitchThemeButton />
				<Router />
			</AppContext.Provider>
		</div>
	);
}

export { App, AppContext, IAppContext }