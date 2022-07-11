import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>臨床工学技士国家試験対策</h1>
      <button onClick={() => navigate("/")}>スタート</button>
    </div>
  );
};
export default Main;
