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

  const socialMediaLinks = [
    {
      link: "https://github.com/bhendi-boi",
      component: <VscGithub />,
    },
    {
      link: "https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/",
      component: <ImLinkedin2 />,
    },

    {
      link: "https://instagram.com/kittusjk/",
      component: <BsInstagram />,
    },
  ];

  return (
    <footer className={darkMode ? "footer dark-footer" : "footer"}>
      <div className="contact-me">
        <div className="icons">
          {socialMediaLinks.map((mediaLink) => {
            return (
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.1 }}
                href={mediaLink.link}
                key={mediaLink.link}
              >
                {mediaLink.component}
              </motion.a>
            );
          })}
        </div>
        <h3>© {currentYear} bhendi-boi</h3>
      </div>
    </footer>
  );
};

export default Footer;
