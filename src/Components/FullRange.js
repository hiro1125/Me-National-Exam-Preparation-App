import React from "react";
import { useNavigate } from "react-router-dom";

const FullRange = () => {
  const navigate = useNavigate();
  return (
    <div className="FullRange">
      <h1>180問試験</h1>
      <div>
        <button onClick={() => navigate(`/mainMenu/`)}>スタート</button>
      </div>
      <div>
        <button onClick={() => navigate(`/mainMenu/`)}>戻る</button>
      </div>
    </div>
  );
};

export default FullRange;
