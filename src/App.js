import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RightContent from "./components/RightContent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RightContent />
      </BrowserRouter>
    </div>
  );
};
export default App;
