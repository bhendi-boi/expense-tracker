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
    }
  };

  return (
    <nav className={"navbar " + (darkMode ? "dark-navbar" : "")}>
      <div className="logo">
        <NavLink to="/">
          <h1>bhendi's</h1>
        </NavLink>
      </div>
      <div className="links">
        {darkMode ? (
          <MdOutlineDarkMode
            className="dark theme-button"
            onClick={changeTheme}
          />
        ) : (
          <MdOutlineLightMode
            className="light theme-button"
            onClick={changeTheme}
          />
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
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.025 }}
            onClick={handleSignOut}
          >
            <p>Logout</p>
          </motion.button>
        ) : (
          <button onClick={handleSignIn}>
            <motion.p whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.025 }}>
              Sign in
            </motion.p>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
