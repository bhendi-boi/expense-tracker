import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import DashBoard from "../pages/DashBoard";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

// styles
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
