import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from "react"
import "./assets/css/App.css"
import GameOptionModal from "./components/GameOptionModal"
import SwitchThemeButton from "./components/Main/SwitchThemeButton"
import { Router } from "./utils/Router"

interface IAppContext {
	theme: string
	modalVisible: boolean
	setModalVisibility: Dispatch<SetStateAction<boolean>>
}

const AppContext: any = createContext<IAppContext | null>(null)

const App = (): JSX.Element => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
	const [modalVisible, setModalVisibility] = useState<boolean>(false)
	const [unlistedMatch, switchUnlistedMatch] = useState<boolean>(false)

	return (
		<div className="app" data-theme={theme}>
			<AppContext.Provider value={{ theme, setTheme, modalVisible, setModalVisibility, unlistedMatch, switchUnlistedMatch }}>
				<SwitchThemeButton />
				<Router />
			</AppContext.Provider>
		</div>
	);
}

export { App, AppContext, IAppContext }