import React from "react";
import "./LeftContent.css";

const LeftContent = () => {
  return (
    <div className="leftcontent-body">
      <a
        className="leftcontent"
        href="https://github.com/RichardTerrence"
        target="_blank"
        rel="noreferrer"
      >
        <img className="image" alt="" />
      </a>
      <div className="middle">
        <div className="text">Hi I am Terrence</div>
      </div>
    </div>
  );
};
export default LeftContent;
