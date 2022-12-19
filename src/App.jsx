import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

// context
import { AuthProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserDataContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserDataProvider>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </UserDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
