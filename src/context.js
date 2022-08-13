import { createContext, useState } from "react";

export const DarkThemeContext = createContext();

export const DarkThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const values = [darkTheme, setDarkTheme];
  return (
    <DarkThemeContext.Provider value={values}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};
