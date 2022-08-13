import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

// context
import { DarkThemeContext } from "../context";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isSignIn, setSignin] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkThemeContext);
  const handleThemeChange = (e) => {
    setDarkMode((prev) => !prev);
    console.log("f");
  };
  const handleSignin = () => {};
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
        {!darkMode ? (
          <MdOutlineDarkMode name="dark" onClick={handleThemeChange} />
        ) : (
          <MdDarkMode name="light" onClick={handleThemeChange} />
        )}
        {isSignIn ? (
          <>
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/history">
              <h3>History</h3>
            </Link>
          </>
        ) : null}
        <button onClick={handleSignin}>
          <h3>{isSignIn ? "sign out" : "sign in"}</h3>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
