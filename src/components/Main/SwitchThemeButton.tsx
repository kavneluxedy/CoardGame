import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../../App"

const SwitchThemeButton = () => {

    const { exempleTheme, theme, setTheme }: any = useContext(ThemeContext);

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
            {/* Switch Theme Button */}
            <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider round"></span>
                {exempleTheme.theme}
            </label>

        </>
    )
}

export default SwitchThemeButton