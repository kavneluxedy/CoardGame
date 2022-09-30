import React, { useContext, useEffect } from "react";
import { AppContext, IAppContext } from "../../App";

const SwitchThemeButton = () => {
  const { theme, setTheme }: IAppContext = useContext(AppContext)!;
  
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
