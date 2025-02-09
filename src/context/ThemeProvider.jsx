/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("");
  const [theme, setTheme] = useState("");

  const changeTheme = () => {
    const preferDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    const addDark = () => document.documentElement.classList.add("dark");
    const removeDark = () => document.documentElement.classList.remove("dark");

    if (storedTheme === "dark" || (preferDark && !storedTheme)) {
      if (storedTheme === "dark") {
        setMode("dark");
        setTheme("dark");
        addDark();
        return;
      }
      setMode("system");
      setTheme("dark");
      addDark();
      return;
    } else {
      if (!storedTheme && !preferDark) {
        setTheme("light");
        setMode("system");
        removeDark();
        return;
      }
      setTheme("light");
      setMode("light");
      removeDark();
      return;
    }
  };

  useEffect(() => {
    changeTheme();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme should be used within ThemeProvider");

  return context;
};

export default ThemeProvider;
