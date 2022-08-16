import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
