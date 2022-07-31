import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
import Error from "./Error";
import Signin from "./Signin";
import History from "./History";
import DashBoard from "./DashBoard";
import CreateAccount from "./CreateAccount";
// components
import Navbar from "./components/Navbar";
export const ThemeContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:user" element={<DashBoard />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
