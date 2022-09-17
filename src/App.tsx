import React, { createContext, useEffect, useState } from "react"
import "./assets/css/App.css"
import SwitchThemeButton from "./components/Main/SwitchThemeButton"
import { Router } from "./utils/Router"

interface appContextInterface {
	theme: string
	nickname: string
}

const AppContext: any = createContext<appContextInterface | null>(null)

const App = (): JSX.Element => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
	const [nickname, setNickname] = useState("Visitor")

	useEffect(() => {
		console.log(nickname)
		setNickname(nickname === "" ? "Visitor" : nickname)
	}, [nickname])

	return (
		<div className="app" data-theme={theme}>
			<AppContext.Provider value={{ theme, setTheme, nickname, setNickname }}>
				<SwitchThemeButton />
				<Router />
			</AppContext.Provider>
		</div>
	);
}

export { App, AppContext, appContextInterface }