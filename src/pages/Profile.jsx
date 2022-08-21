import React, { useContext, useState } from "react";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";

// firebase
import { auth, db, storage } from "../firebase/config";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// styles
import "../styles/Profile.css";

// component
const Profile = () => {
  const { darkMode } = useContext(DarkThemeContext);
  const [file, setFile] = useState("");
  const [newData, setNewData] = useState({
    name: "",
    password: "",
    country: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  // event handlers
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setNewData({ ...newData, username: `${e.target.value}` });
    } else if (e.target.id === "password") {
      setNewData({ ...newData, password: `${e.target.value}` });
    } else if (e.target.id === "confirmPassword") {
      if (newData.password !== "") {
        setConfirmPassword(e.target.value);
      } else {
        window.alert("enter password first");
      }
    }
  };

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefalut();
    const response = await addDoc(collection(db, "users"), {
      name: `${newData.name}`,
      country: "India",
      lastUpdatedAt: serverTimestamp(),
    });
  };

  return (
    <div className={"profile " + (darkMode ? "dark-profile" : "")}>
      <div className="activity"></div>
      <div className="edit-profile">
        <div className="image-upload">
          <input type="url" placeholder="image-upload" />
        </div>
        <h3>Edit profile</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="username"
            value={newData.name}
          />
          <label htmlFor="password">Change password</label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="password"
            value={newData.password}
          />
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            onChange={handleChange}
            id="confirmPassword"
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
