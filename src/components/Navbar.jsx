import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// styles
import { motion } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  // variables

  const [error, setError] = useState("");

  // context
  const { darkMode, changeTheme } = useContext(DarkThemeContext);
  const { logOut } = useContext(AuthContext);
  const currentUser = true;
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
    <nav className={"navbar " + (darkMode ? "dark-navbar" : "")}>
      <div className="logo">
        <NavLink to="/">
          <h1>bhendi's</h1>
        </NavLink>
      </div>
      <div className="links">
        {darkMode ? (
          <MdOutlineDarkMode className="dark" onClick={changeTheme} />
        ) : (
          <MdOutlineLightMode className="light" onClick={changeTheme} />
        )}

        {currentUser ? (
          <>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/profile">
              Profile
            </NavLink>
          </>
        ) : null}
        {currentUser ? (
          <button onClick={handleSignOut}>
            <h3>Sign out</h3>
          </button>
        ) : (
          <button onClick={handleSignIn}>
            <h3>Sign in</h3>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
