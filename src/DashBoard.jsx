import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/DashBoard.css";
const DashBoard = () => {
  // const params = useParams();
  const darkMode = false;
  return (
    <div className={"dashboard "(darkMode ? "dark-dashborad" : "")}>
      DashBoard
      <h1>f</h1>
    </div>
  );
};

export default DashBoard;
