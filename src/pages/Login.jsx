import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// css imports
import "../styles/Signin.css";

const Login = () => {
  // post function
  const [darkMode, setDarkMode] = useContext(DarkThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // firebase
  const { logIn } = useContext(AuthContext);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const post = async () => {
    try {
      setLoading(true);
      const userResponse = await logIn(email, password);
      console.log(userResponse);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={"signin " + (darkMode ? "dark-signin" : "")}>
      {/* <h4>Sign in to continue using this site</h4> */}
      <form
        onSubmit={(e) => {
          console.log("submitted");
          post();
        }}
      >
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleChange}
          required={true}
          value={email}
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
          <button disabled={loading} type="submit">
            signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
