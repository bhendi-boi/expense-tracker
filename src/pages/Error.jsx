import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles
import "../styles/Error.css";

const Error = () => {
  const { darkMode } = useContext(DarkThemeContext);
  const { currentUser } = useContext(AuthContext);

  const errorMessage = "Error 404 page not found. Try checking the URL";
  return (
    <div className={"error " + (darkMode ? "dark-error" : "")}>
      <h3 className="error-message">{errorMessage}</h3>

      <div className={"main-content " + (darkMode ? "dark-main-content" : "")}>
        {currentUser ? (
          <h3>
            click <Link to="/profile">here</Link> to go to your profile
          </h3>
        ) : (
          <h3>
            click <Link to="/">here</Link> to visit home page
          </h3>
        )}
      </div>
    </div>
  );
};

export default Error;
