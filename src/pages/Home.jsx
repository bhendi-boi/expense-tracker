import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles
// import "../styles/test.css";
import "../styles/Home.css";
import { motion } from "framer-motion";

const Home = () => {
  // darkmode prop
  const { darkMode } = useContext(DarkThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "100vw", transistion: { duration: 0.2 } }}
      className={"home" + (darkMode ? " dark-home" : "")}
    >
      {!currentUser ? (
        <section className="not-signed-in">
          <h1>You are currently not logged in!!</h1>

          <h3>
            <Link to="/login">login</Link> or
            <Link to="/signup" className="signup">
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