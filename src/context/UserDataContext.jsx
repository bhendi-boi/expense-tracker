import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";

// firebase
import { db } from "../firebase/config";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { useContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const updateUserDetails = ({ newData }) => {
    return setDoc(db(db, "users", currentUser.user.uid), {
      name: `${newData.name}`,
      country: "India",
      lastUpdatedAt: serverTimestamp(),
    });
  };

  const values = { updateUserDetails };
  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  );
};
