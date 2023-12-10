import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-container">
      <h5 className="skill-title">Skills</h5>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>HTML/CSS</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar1">80%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>React JS</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar2">70%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>MYSQL</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar3">60%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>Postman</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar4">60%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>PHP</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar5">60%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>Laravel</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar6">65%</div>
        </div>
      </div>
      <div className="skill-progress">
        <div className="skill-tech">
          <h6>React Bootstrap</h6>
        </div>
        <div className="skill-percent">
          <div className="skill-progressbar7">70%</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
