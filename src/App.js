import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RightContent from "./components/RightContent";
import LeftContent from "./components/LeftContent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RightContent />
        <LeftContent />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
