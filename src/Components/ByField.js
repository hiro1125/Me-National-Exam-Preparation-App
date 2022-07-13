import React from "react";
import { useNavigate } from "react-router-dom";

const ByField = () => {
  const navigate = useNavigate();
  return (
    <div className="ByField">
      <h1>分野別</h1>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>医学概論</button>
        <button onClick={() => navigate(`/ByField/`)}>臨床医学総論</button>
        <button onClick={() => navigate(`/ByField/`)}>生体計測装置学</button>
      </div>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>医用治療機器学</button>
        <button onClick={() => navigate(`/ByField/`)}>
          医用機器安全管理学
        </button>
        <button onClick={() => navigate(`/ByField/`)}>医用電気電子工学</button>
      </div>
      <div>
        <button onClick={() => navigate(`/ByField/`)}>
          生体機能代行装置学
        </button>
        <button onClick={() => navigate(`/ByField/`)}>医用機械工学</button>
        <button onClick={() => navigate(`/ByField/`)}>生体物性材料工学</button>
      </div>
      <div>
        <button onClick={() => navigate(`/mainMenu/`)}>戻る</button>
      </div>
    </div>
  );
};

export default ByField;
