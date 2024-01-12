import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RightContent from "./components/RightContent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RightContent />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
