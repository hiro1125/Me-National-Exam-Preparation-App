import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullRange from "./Components/FullRange";
import Main from "./Components/Main";
import MainMenu from "./Components/MainMenu";
import ByField from "./Components/ByField";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path={`/mainMenu/`} element={<MainMenu />} />
        <Route path={`/ByField/`} element={<ByField />} />
        <Route path={`/FullRange/`} element={<FullRange />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
