import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import MainMenu from "./Components/MainMenu";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={"/MainMenu"} element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
