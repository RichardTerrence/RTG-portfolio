import React from "react";
import "./PortfolioGallery.css";
import capstone from "./images/capstone.png";
import capstone1 from "./images/capstone1.png";
import capstone2 from "./images/capstone2.png";
import capstone3 from "./images/capstone3.png";
import minproj1 from "./images/minproj1.png";
import majproj2 from "./images/majproj2.png";

const PortfolioGallery = () => {
  return (
    <>
      <div id="mydesign" className="myPortfolio">
        <div className="portfolio-title">
          <h2>My Portfolio</h2>
        </div>
        <div className="content" style={{ cursor: "pointer" }}>
          <img src={minproj1} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>

        <div className="content" style={{ cursor: "pointer" }}>
          <img src={majproj2} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>

        <div className="content" style={{ cursor: "pointer" }}>
          <img src={capstone} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>

        <div className="content" style={{ cursor: "pointer" }}>
          <img src={capstone1} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>

        <div className="content" style={{ cursor: "pointer" }}>
          <img src={capstone3} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>

        <div className="content" style={{ cursor: "pointer" }}>
          <img src={capstone2} alt="" style={{ width: "100%" }} />
          <p></p>
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
