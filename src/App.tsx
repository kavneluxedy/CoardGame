import React, { createContext, useState } from "react";
import "./assets/css/App.css";
import SwitchThemeButton from "./components/Main/SwitchThemeButton";
import { Router } from "./utils/Router";

interface themeContextInterface {
	theme: string
}

const ThemeContext: any = createContext<themeContextInterface | null>(null);

const exempleTheme: themeContextInterface = {
	theme: "light",
};

const App = (): JSX.Element => {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

	return (
		<div className="app" data-theme={theme}>
			<ThemeContext.Provider value={{ exempleTheme, theme, setTheme }}>
				<SwitchThemeButton />
				<Router />
			</ThemeContext.Provider>
		</div>
	);
}

export { App, ThemeContext, themeContextInterface }