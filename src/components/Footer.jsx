import React, { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeContext";
// styles
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import "../styles/Footer.css";

// main jsx
const Footer = () => {
  const { darkMode } = useContext(DarkThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={darkMode ? "footer dark-footer" : "footer"}>
      <div className="contact-me">
        <div className="icons">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={{ duration: 2 }}
            href="https://github.com/bhendi-boi"
          >
            <VscGithub className="icon" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={{ duration: 2 }}
            href="https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/"
          >
            <ImLinkedin2 className="icon" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={{ duration: 2 }}
            href="https://instagram.com/kittusjk/"
          >
            <BsInstagram className="icon" />
          </motion.a>
        </div>
        <h3>© {currentYear} bhendi-boi</h3>
      </div>
    </footer>
  );
};

export default Footer;
