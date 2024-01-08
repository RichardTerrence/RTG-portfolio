import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PortfolioContainer />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
