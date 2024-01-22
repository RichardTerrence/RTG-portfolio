import React from "react";
import "./PortfolioGallery.css";
import capstone from "./images/capstone.png";
import capstone1 from "./images/capstone1.png";
import capstone2 from "./images/capstone2.png";
import capstone3 from "./images/capstone3.png";
import minproj1 from "./images/minproj1.png";
import minproj2 from "./images/minproj2.png";
import minproj3 from "./images/minproj3.png";
import minproj4 from "./images/minproj4.png";
import majproj1 from "./images/majproj1.png";
import majproj2 from "./images/majproj2.png";
import majproj3 from "./images/majproj3.png";

const PortfolioGallery = () => {
  function handleClick() {
    alert("Nothing to view at this moment the content is not yet complete.");
  }

  return (
    <>
      <div id="mydesign" className="myPortfolio">
        <div className="portfolio-title">
          <h2>My Portfolio</h2>
        </div>
        <div className="content1" style={{ cursor: "pointer" }}>
          <div onClick={handleClick} className="minproj1">
            <img src={minproj1} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="minproj2">
            <img src={minproj2} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="minproj3">
            <img src={minproj3} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="minproj4">
            <img src={minproj4} alt="" style={{ width: "100%" }} />
          </div>
          <p></p>
        </div>

        <div className="content2" style={{ cursor: "pointer" }}>
          <div onClick={handleClick} className="majproj1">
            <img src={majproj1} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="majproj2">
            <img src={majproj2} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="majproj3">
            <img src={majproj3} alt="" style={{ width: "100%" }} />
          </div>
          <p></p>
        </div>

        <div className="content3" style={{ cursor: "pointer" }}>
          <div onClick={handleClick} className="capstone">
            <img src={capstone} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="capstone1">
            <img src={capstone1} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="capstone3">
            <img src={capstone3} alt="" style={{ width: "100%" }} />
          </div>
          <div onClick={handleClick} className="capstone2">
            <img src={capstone2} alt="" style={{ width: "100%" }} />
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
