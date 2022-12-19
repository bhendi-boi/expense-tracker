import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
// context
import { DarkThemeContext } from "../context/DarkThemeContext";
import { AuthContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserDataContext";

// styles
import { motion } from "framer-motion";

// main jsx
const EditProfile = ({ newData, setNewData, closeModal, changePassword }) => {
  const { darkMode } = useContext(DarkThemeContext);
  const { updateUserData } = useContext(UserDataContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // event handlers
  const handleChange = (e) => {
    if (e.target.id === "username") {
      setNewData({ ...newData, name: `${e.target.value}` });
    } else if (e.target.id === "country") {
      setNewData({ ...newData, country: `${e.target.value}` });
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
    if (changePassword) {
      if (validatePasswords()) {
        try {
          const response = updateUserData(newData);
          console.log(response);
        } catch (error) {
          setError(error);
        }
      }
    } else {
      try {
        const response = updateUserData(newData);
        console.log(response);
      } catch (error) {
        setError(error);
      }
    }
  };
  console.log(newData);
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
    <div className="edit-profile-wrapper">
      <div className={"edit-profile " + (darkMode ? "dark-edit-profile" : "")}>
        <div className="header">
          <h3>Edit profile</h3>
          <motion.button
            onClick={closeModal}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            X
          </motion.button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputs">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              id="username"
              type="text"
              placeholder="John Doe"
              value={newData.name}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="country">Country</label>
            <input
              onChange={handleChange}
              id="country"
              type="text"
              placeholder="India"
              value={newData.country}
              required
            />
          </div>
          <div className="inputs ">
            <label htmlFor="age">Age</label>
            <div className="age-input">
              <input
                // onChange={handleChange}
                id="age"
                type=""
                placeholder="age"
                value={newData.age}
                required
              />
              <button
                onClick={setNewData((prev) => ({ ...prev, age: prev.age + 1 }))}
              >
                +
              </button>
              <button
                onClick={setNewData((prev) => ({ ...prev, age: prev.age - 1 }))}
              >
                -
              </button>
            </div>
          </div>

          {changePassword && (
            <>
              <div className="inputs">
                <label htmlFor="password">New password</label>
                <input
                  onChange={handleChange}
                  id="password"
                  type="password"
                  placeholder="password"
                  value={newData.password}
                  required
                />
              </div>
              <div className="inputs">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  onChange={handleChange}
                  id="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  value={confirmPassword}
                  required
                />
              </div>
            </>
          )}

          {/* <div className="error">
            <p>{error}</p>
            <p>Are you sure you want to make this changes?</p>
          </div> */}
          <div className="submit">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="no-button"
              onClick={closeModal}
            >
              No
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="yes-button"
              type="submit"
            >
              Continue
            </motion.button>
          </div>
        </form>
      </div>
    </div>

    // document.getElementById("portal")
  );
};

export default EditProfile;
