import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// context
import { DarkThemeContext } from "./context";

// css imports
import "./styles/Signin.css";

const Signin = () => {
  // post function
  const [darkMode, setDarkMode] = useContext(DarkThemeContext);
  console.log(darkMode);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const post = () => {
    return;
  };

  return (
    <div className={"signin " + (darkMode ? "dark-signin" : "")}>
      <form
        onSubmit={(e) => {
          console.log("submitted");
        }}
      >
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          required={true}
          value={username}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          required={true}
        />
        <div className="submit-button">
          <p>
            don't have an account ? click
            <Link to="/createaccount">
              <span>here</span>
            </Link>
            to create one
          </p>
          <button>signin</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
