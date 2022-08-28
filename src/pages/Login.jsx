import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// css imports
import { motion } from "framer-motion";
import "../styles/Login.css";

const Login = () => {
  // post function
  const { darkMode } = useContext(DarkThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // firebase
  const { logIn, currentUser } = useContext(AuthContext);
  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (!(currentUser === null)) {
      navigate("/");
    }
  }, [currentUser]);

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
  console.log(currentUser);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className={"signin " + (darkMode ? "dark-signin" : "")}
    >
      {/* <h4>Sign in to continue using this site</h4> */}

      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
            if (email === "" || password === "") {
              return;
            }
            post();
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="email"
            onChange={handleChange}
            required={true}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            required={true}
          />
          <div className="submit-button">
            <motion.button
              disabled={loading}
              type="submit"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              sign in
            </motion.button>
            <p>
              don't have an account ? click
              <Link to="/signup">here</Link>
              to create one
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
