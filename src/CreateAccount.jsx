import React, { useState } from "react";
import "./styles/CreateAccount.css";

const CreateAccount = () => {
  // todo list
  // 1 signin button
  // 2 complete the confirm password and posting function
  // 3 darkMode

  const darkMode = !false;
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    sex: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePasswords = () => {
    // 1 special char , 1 number and 8 characters min
    if (confirmPassword === user.password) {
      console.log("first");
      return;
    }

    window.alert("passwords dont match");
  };
  const postRequest = async () => {
    console.log("post request");
  };

  const handleChange = (e) => {
    if (e.target.name === "firstname") {
      setUser({ ...user, firstname: `${e.target.value}` });
    } else if (e.target.name === "lastname") {
      setUser({ ...user, lastname: `${e.target.value}` });
    } else if (e.target.name === "password") {
      setUser({ ...user, password: `${e.target.value}` });
    } else if (e.target.name === "confirmpassword") {
      setConfirmPassword(e.target.value);
    }
  };
  return (
    <div
      className={"create-account " + (darkMode ? "dark-create-account" : "")}
    >
      <h1>welcome to bhendi's</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validatePasswords();
          postRequest();
        }}
      >
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={user.firstname}
          required={true}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={user.lastname}
          required={true}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
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
        <input type="submit" text="submit" />
      </form>
    </div>
  );
};

export default CreateAccount;
