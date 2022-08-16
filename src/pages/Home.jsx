import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
import { DarkThemeContext } from "../context/DarkThemeContext";
import "../styles/Home.css";

const Home = () => {
  // darkmode prop
  const { darkMode } = useContext(DarkThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={"home" + (darkMode ? " dark-home" : "")}>
      {!currentUser ? (
        <section className="not-signed-in">
          <h2>
            <Link to="/login">
              <span>login </span>
            </Link>
            or
            <Link to="/createaccount">
              <span> signup </span>
            </Link>
            to access the site
          </h2>
        </section>
      ) : (
        <section className="signed-in">
          <h1>{currentUser && currentUser.email}</h1>
        </section>
      )}
    </div>
  );
};

export default Home;
