import React from "react";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="MainMenu">
      <h1>臨床工学技士国家試験対策</h1>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
      </div>
      <div>
        <button onClick={() => navigate(`/FullRange/`)}>180問試験</button>
      </div>
      <div>
        <button onClick={() => navigate(`/`)}>戻る</button>
      </div>
    </div>
  );
};

export default MainMenu;
