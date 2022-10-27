import React, { useContext, useEffect } from "react";
import { AppContext } from "../../utils/ContextProvider";

const SwitchThemeButton = () => {
  const AppCtx = useContext(AppContext);
  if (AppCtx === null) { return<></>; }
  const { theme, setTheme } = {...AppCtx}
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* Switch Theme Button */}
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default SwitchThemeButton;
