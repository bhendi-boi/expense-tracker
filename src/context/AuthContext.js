import React, { createContext, useState, useEffect } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // variables

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // lifecycle
  useEffect(() => {
    setLoading(true);
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    setLoading(false);

    return unSubscribe;
  }, []);

  // functions
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const values = {
    currentUser,
    signUp,
    logOut,
    logIn,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
