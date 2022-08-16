import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// styles
import "../styles/Navbar.css";

const Navbar = () => {
  // variables

  const [error, setError] = useState("");

  // context
  const { darkMode, changeTheme } = useContext(DarkThemeContext);
  const { logOut, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // functions
  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError("failed to logout");
    }
  };
  /*
    ? sigiin prop and darkMode prop
   */

  return (
    <div className={"navbar " + (darkMode ? "dark-navbar" : "")}>
      <div className="logo">
        <Link to="/">
          <h1>bhendi's</h1>
        </Link>
      </div>
      <div className="links">
        {darkMode ? (
          <MdOutlineDarkMode className="dark" onClick={changeTheme} />
        ) : (
          <MdOutlineLightMode className="light" onClick={changeTheme} />
        )}

        {currentUser ? (
          <>
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/profile">
              <h3>Profile</h3>
            </Link>
          </>
        ) : null}
        {currentUser ? (
          <button onClick={handleSignOut}>
            <h3>sign out</h3>
          </button>
        ) : (
          <button onClick={handleSignIn}>
            <h3>sign in</h3>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
