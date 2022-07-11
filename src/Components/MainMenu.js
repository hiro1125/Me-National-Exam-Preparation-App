import React from "react";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>臨床工学技士国家試験対策</h1>
      <button onClick={() => navigate("/MainMenu")}>aaaaa</button>
      <button>スタート</button>
      <button>スタート</button>
    </div>
  );
};
export default MainMenu;
