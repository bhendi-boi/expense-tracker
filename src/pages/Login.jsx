import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// css imports
import { motion } from "framer-motion";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (email === "" || password === "") {
      return;
    }
    post();
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
  console.log(currentUser);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <picture className="w-full h-48 bg-yellow-300">
        <img src="" alt="" className="w-full h-full" />
      </picture>
      <form onSubmit={handleSubmit} className="px-4 py-2 text-gray-800 h-1/2">
        <span className="block w-full mb-4 text-xl text-center">
          Login in to continue
        </span>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="johndoe@gmail.com"
            className="px-4 py-2 text-gray-700 rounded-md bg-zinc-200 focus:outline-none focus:ring-2 focus:bg-white"
            onChange={handleChange}
            required={true}
            value={email}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            className="px-4 py-2 text-gray-700 rounded-md focus:ring-2 bg-zinc-200 focus:outline-none focus:bg-white"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <motion.button
            disabled={loading}
            type="submit"
            className="w-3/4 px-4 py-2 mx-auto font-medium text-white capitalize border-b-2 rounded-md border-slate-50 bg-emerald-500"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            sign in
          </motion.button>
          <span className="">
            Don't have an account ?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline hover:underline-offset-1"
            >
              Signup
            </Link>{" "}
          </span>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
