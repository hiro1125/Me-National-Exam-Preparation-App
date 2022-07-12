import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="Main">
      <h1>臨床工学技士国家試験対策</h1>
      <div>
        <button onClick={() => navigate(`/mainMenu/`)}>スタート</button>
      </div>
    </div>
  );
};

export default Main;
