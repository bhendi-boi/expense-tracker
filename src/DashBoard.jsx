import React from "react";
import { useParams } from "react-router-dom";
const DashBoard = () => {
  const params = useParams();
  return (
    <div>
      DashBoard
      <h1>{params}</h1>
    </div>
  );
};

export default DashBoard;
