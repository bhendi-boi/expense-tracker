import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/config";
// styles
import "../styles/CreateAccount.css";

const CreateAccount = () => {
  // todo list
  // 1 signin button
  // 2 complete the confirm password and posting function
  // 3 darkMode
  const { darkMode } = useContext(DarkThemeContext);
  const [inputUser, setinputUser] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // functions
  const validatePasswords = () => {
    // 1 special char , 1 number and 8 characters min
    if (confirmPassword === inputUser.password) {
      return;
    }

    window.alert("passwords dont match");
    setinputUser({ ...inputUser, password: "" });
    setConfirmPassword("");
  };

  // authentication
  const { logIn } = useContext(AuthContext);

  const handleSignIn = async (inputUser) => {
    setLoading(true);
    try {
      const response = await logIn(inputUser.email, inputUser.password);
      console.log(`response  = ${response}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  // event handlers

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setinputUser({ ...inputUser, email: `${e.target.value}` });
    } else if (e.target.name === "password") {
      setinputUser({ ...inputUser, password: `${e.target.value}` });
    } else if (e.target.name === "confirmpassword") {
      setConfirmPassword(e.target.value);
    }
  };
  return (
    <div
      className={"create-account " + (darkMode ? "dark-create-account" : "")}
    >
      <h1>welcome to bhendi's</h1>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validatePasswords();
            handleSignIn(inputUser);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            value={inputUser.email}
            required={true}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            value={inputUser.password}
            placeholder="password"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmpassword"
            value={confirmPassword}
            placeholder="confirm password"
            onChange={handleChange}
          />
          <div className="sign-in">
            <h4>
              already a
              <Link to="/signin">
                <span>user</span>
              </Link>
              ?
            </h4>
            <button disabled={loading} className="submit-button">
              <h6>submit</h6>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
