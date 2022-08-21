import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// firebase
import { auth, db, storage } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// styles
import { motion } from "framer-motion";
import "../styles/Signup.css";

const Signup = () => {
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
    if (inputUser.password === "") {
      window.alert("enter a password before submittng");
      setinputUser({ ...inputUser, password: "" });
      return false;
    } else if (confirmPassword === "") {
      window.alert("fill the confirm password field before submitting");
      return false;
    } else if (inputUser.password.length < 7) {
      window.alert("password must be atleast 8 characters long");
      setinputUser({ ...inputUser, password: "" });
      setConfirmPassword("");
      return false;
    } else if (inputUser.password !== confirmPassword) {
      window.alert("passswords you entered donot match");
      setConfirmPassword("");
      return false;
    }
    return true;
  };

  // authentication
  const { signUp, currentUser } = useContext(AuthContext);

  const handleSignIn = async (inputUser) => {
    setLoading(true);
    try {
      const authResponse = await signUp(inputUser.email, inputUser.password);
      // const docResponse = await setDoc(
      //   doc(db, "users", authResponse.user.uid),
      //   {
      //     name: `${inputUser.email}`,
      //     createdAt: serverTimestamp(),
      //   }
      // );
      // console.log(docResponse);
      console.log(authResponse);
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
      <h1>
        Hello, {currentUser ? `${currentUser}` : "user"} Welcome to bhendi's
      </h1>
      <h3>
        {currentUser
          ? "Since you are already logged in you can start accesing this site"
          : "create an account by filling out the form below"}
      </h3>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validatePasswords()) {
              handleSignIn(inputUser);
            }
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={inputUser.email}
            required={true}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputUser.password}
            placeholder="password"
            onChange={handleChange}
          />
          <label htmlFor="confirmpassword">Confirm password</label>
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
              <Link to="/login">
                <span>user</span>
              </Link>
              ?
            </h4>
            <motion.button
              disabled={loading}
              type="submit"
              className="submit-button"
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
            >
              <p>Submit</p>
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
