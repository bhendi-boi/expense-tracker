import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles
import { motion } from "framer-motion";

const Home = () => {
  // darkmode prop
  const { currentUser } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeIn",
        duration: 0.5,
      }}
      className="min-h-screen bg-background"
    >
      {!currentUser ? (
        <section className="not-signed-in">
          <p>You are currently not logged in!!</p>
          <h3>
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline underline-offset-2 focus-within:underline"
            >
              login
            </Link>{" "}
            or
            <Link
              to="/signup"
              className="font-medium text-blue-600 hover:underline underline-offset-2 focus-within:underline"
            >
              signup
            </Link>
            to start using this site
          </h3>
        </section>
      ) : (
        <section className="signed-in">
          <h1>Welcome back, {currentUser && currentUser.email}</h1>
          <p>
            as of now the profile page and dashboard page dont work properly.
            Have to add the functionality
          </p>
        </section>
      )}
    </motion.div>
  );
};

export default Home;
