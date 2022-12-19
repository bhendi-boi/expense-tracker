import { useContext } from "react";
// styles
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

// main jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = [
    {
      link: "https://github.com/bhendi-boi",
      component: <VscGithub size={36} />,
    },
    {
      link: "https://www.linkedin.com/in/jyothikrishna-sajja-96bb45226/",
      component: <ImLinkedin2 size={36} />,
    },
    {
      link: "mailto:bhendi-boi@gmai.com",
      component: <SiGmail size={36} />,
    },
  ];

  return (
    <footer className="flex flex-col items-center w-full gap-2 py-2">
      <p className="text-gray-700 opacity-70">
        Copyright © {currentYear} Jyothikrishna
      </p>
      <div className="flex gap-2 text-gray-700">
        {socialMediaLinks.map((mediaLink) => {
          return (
            <motion.a
              href={mediaLink.link}
              key={mediaLink.link}
              target="_blank"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {mediaLink.component}
            </motion.a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
