import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DashBoard from "./pages/DashBoard";
import CreateAccount from "./pages/CreateAccount";

// components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// context
import { DarkThemeProvider } from "./context/DarkThemeContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <DarkThemeProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/signup" element={<CreateAccount />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AuthProvider>
      </DarkThemeProvider>
    </BrowserRouter>
  );
};

export default App;
