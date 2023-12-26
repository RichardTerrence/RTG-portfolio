import React from "react";
import "./PortfolioContainer.css";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const PortfolioContainer = () => {
  return (
    <div className="main-container">
      <div className="right-content">
        <RightContent />
      </div>
      <div className="right-content">
        <LeftContent />
      </div>
    </div>
  );
};

export default PortfolioContainer;
