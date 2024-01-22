import React from "react";
import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ThemeToggle() {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();
  return (
    <div>
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
