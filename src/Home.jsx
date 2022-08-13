import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { DarkThemeContext } from "./context";
import "./styles/Home.css";

const Home = () => {
  // darkmode prop
  const [darkMode, setDarkTheme] = useContext(DarkThemeContext);

  return (
    <div className={"home" + (darkMode ? " dark-home" : "")}>
      <section>
        <h2>
          <Link to="/signin">
            <span>login </span>
          </Link>
          or
          <Link to="/createaccount">
            <span> signup </span>
          </Link>
          to access the site
        </h2>
      </section>
    </div>
  );
};

export default Home;
