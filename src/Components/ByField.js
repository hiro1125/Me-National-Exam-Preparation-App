import React from "react";
import { useNavigate } from "react-router-dom";

const ByFiled = () => {
  const navigate = useNavigate();
  return (
    <div className="ByFiled">
      <h1>分野別</h1>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
      </div>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
      </div>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
        <button onClick={() => navigate(`/ByField/`)}>分野別</button>
      </div>
      <div>
        <button onClick={() => navigate(`/mainMenu/`)}>戻る</button>
      </div>
    </div>
  );
};

export default ByFiled;
