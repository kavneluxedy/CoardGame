import React, { Context, useContext, useEffect } from "react"
import { AppCtx, themeContextInterface } from "../../App"

const SwitchThemeButton = () => {

    const { exempleTheme, theme, setTheme }: any = useContext(AppCtx);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        console.log(theme)
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <>
            {/* <AppCtx.Consumer> */}
            {/* Switch Theme Button */}
            <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider round"></span>
                {exempleTheme.theme}
            </label>
            {/* </AppCtx.Consumer> */}
        </>
    )
}

export default SwitchThemeButton