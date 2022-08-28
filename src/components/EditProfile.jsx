import React, { useState, useContext } from "react";

// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";

// firebase
import { auth, db, storage } from "../firebase/config";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// styles
import "../styles/EditProfile.css";

// main jsx
const EditProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkThemeContext);
  const [file, setFile] = useState("");
  const [newData, setNewData] = useState({
    name: "",
    password: "",
    country: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
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
    if (validatePasswords()) {
      try {
        await setDoc(db(db, "users", currentUser.user.uid), {
          name: `${newData.name}`,
          country: "India",
          lastUpdatedAt: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validatePasswords = () => {
    if (newData.password.length() < 8) {
      setError("password must have atleast 8 characters");
      return false;
    } else if (confirmPassword !== newData.password) {
      setError("passwords donot match");
      return false;
    }
    setError("password submitted succesfully");
    return true;
  };
  console.log(newData);

  return (
    <div className={"edit-profile " + (darkMode ? "dark-edit-profile" : "")}>
      <div className="image-upload">
        <input type="url" placeholder="image-upload" />
      </div>
      <h3>Edit profile</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs">
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
        </div>
        <div className="submit">
          <p>{error}</p>
          <button type="submit">
            <p>Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
