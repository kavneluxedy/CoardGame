import React, { useContext, useEffect } from "react"
import { AppContext } from "../../App"

const SwitchThemeButton = () => {

    const { theme, setTheme }: any = useContext(AppContext);

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
            </label>

        </>
    )
}

export default SwitchThemeButton