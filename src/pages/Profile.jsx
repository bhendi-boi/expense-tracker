import React, { useContext, useState } from "react";
import EditProfile from "../components/EditProfile";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";

// styles
import "../styles/Profile.css";
import { motion } from "framer-motion";

const Profile = () => {
  const { darkMode } = useContext(DarkThemeContext);

  const userData = {
    name: "sjk",
    country: "India",
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "100vw", transistion: { duration: 0.2 } }}
      className={"profile " + (darkMode ? "dark-profile" : "")}
    >
      <div className="activity"></div>
      <div className="display">
        <div className="profile-image">
          <i src="" alt="profile-pic" />
        </div>
        <div className="details">
          <h3>Edit profile ?</h3>
          <label>Name</label>
          <h3>{userData.name}</h3>
          <label htmlFor="country">Country</label>
          <h3>{userData.country}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
