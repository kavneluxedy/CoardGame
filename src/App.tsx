import React, { createContext, useContext, useEffect, useState } from "react";
import "./assets/css/App.css";
import SwitchThemeButton from "./components/Main/SwitchThemeButton";
import { Router } from "./utils/Router";

export interface themeContextInterface {
	theme: string
}

export const AppCtx: any = createContext<themeContextInterface | null>(null);

const exempleTheme: themeContextInterface = {
	theme: "light",
};

export const App = () => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

	return (
		<div className="app" data-theme={theme}>
			<AppCtx.Provider value={{ exempleTheme, theme, setTheme }}>
				<Router />
				<SwitchThemeButton />
			</AppCtx.Provider>
		</div>
	);
}