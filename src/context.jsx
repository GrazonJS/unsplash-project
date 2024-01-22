import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme");

    if (storedDarkMode === null) {
      return prefersDarkMode;
    }

    return storedDarkMode === "true";
  };

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
    console.log(body.classList);
  };
  return (
    <AppContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}
