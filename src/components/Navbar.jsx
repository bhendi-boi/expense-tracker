import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  const isSignIn = false;
  const darkMode = false;

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
        {isSignIn ? (
          <>
            <Link to="/">
              <h3>home</h3>
            </Link>
            <Link to="/history">
              <h3>history</h3>
            </Link>
          </>
        ) : null}

        <button>
          <h3>{isSignIn ? "sign out" : "sign in"}</h3>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
