import React, { useState } from "react";
import { Link } from "react-router-dom";

// css imports
import "./styles/Signin.css";

const Signin = () => {
  // post function
  const darkMode = false;

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
    <div className={"signin" + (darkMode ? "dark-sigiin" : "")}>
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
            don't have an account ?<br /> click
            <Link to="/createaccount">
              <span> here </span>
            </Link>
            to create one
          </p>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
