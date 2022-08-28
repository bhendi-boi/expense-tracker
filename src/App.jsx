import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

// context
import { DarkThemeProvider } from "./context/DarkThemeContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <DarkThemeProvider>
        <AuthProvider>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </AuthProvider>
      </DarkThemeProvider>
    </BrowserRouter>
  );
};

export default App;
