import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) | false
  );
  const changeTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const values = { darkMode, changeTheme };
  return (
    <DarkThemeContext.Provider value={values}>
      {props.children}{" "}
    </DarkThemeContext.Provider>
  );
};
