import React, { useContext, useEffect } from "react";
import { AppContext } from "../utils/ContextProvider";

//TODO FIX TS ISSUES

const ColorTheme = () => {
	const AppCtx = useContext(AppContext);
	const { colorTheme, setColorTheme } = { ...AppCtx }

	useEffect(() => {
		(colorTheme)
		? localStorage.setItem("theme", colorTheme)
		: setColorTheme(localStorage.getItem("theme"));
		console.log(colorTheme);
	}, [colorTheme]);

	if (AppCtx === null) { return <></>; }

	const switchTheme = () => {
		switch (colorTheme) {
			case "Light":
				setColorTheme!("Dark");
				break;
			case "Dark":
				setColorTheme!("Light");
				break;
		}
	}

	return (
		<>
			<label className="switch">
				<input type="checkbox" onClick={switchTheme} />
				<span className="slider round"></span>
			</label>
		</>
	);
};

export default ColorTheme;
