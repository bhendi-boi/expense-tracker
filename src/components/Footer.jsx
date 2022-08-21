import React, { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles
import "../styles/Footer.css";
const Footer = () => {
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <footer className={darkMode ? "footer dark-footer" : "footer"}>
      <h3>© bhendi-boi 2022</h3>
      <p>
        contact me on
        <a href="https://github.com/bhendi-boi">github</a>
      </p>
    </footer>
  );
};

export default Footer;
