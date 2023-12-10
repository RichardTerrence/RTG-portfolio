import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";
import LeftContent from "./components/LeftContent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PortfolioContainer />
        <Routes>
          <Route path="/" element={<LeftContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
