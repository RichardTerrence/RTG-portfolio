import React from "react";
import "./RightContent.css";
import PortfolioGallery from "./PortfolioGallery";
import ContactForm from "./ContactForm";
import ContactIcon from "./ContactIcon";
import SideNav from "./SideNav";
import { Button } from "react-bootstrap";
import NavFooter from "./NavFooter";
import Skills from "./Skills";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
const RightContent = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="rightcontainer" id={theme}>
        <React.Fragment>
          <SideNav />
        </React.Fragment>
        <div className="right-switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div className="right-info">
          <h1>Richard Terrence Go</h1>
          <p>Front-End Developer</p>
          <a href="R.Go-CV.pdf" download="R.Go-CV.pdf">
            <Button className="right-button" style={{ border: "none" }}>
              <i className="fa fa-download"></i> Download Resume
            </Button>
          </a>
        </div>
        <div
          className="right-about"
          id="about"
          style={{ textAlign: "justify" }}
        >
          <h5>About</h5>
          <p>
            Highly motivated and enthusiastic with a strong foundation in
            front-end designing and coding. Eager to contribute my skill and
            passion for learning to a dynamic and fast-paced team. Possessing a
            relentless drive to expand my knowledge and proficiency in trending
            tech stacks, I am committed to deepening my understanding of
            cutting-edge technologies. With a blend of creativity, adaptability,
            and problem-solving skills, I am poised to make a positive impact
            and thrive in the ever-evolving world of web development.
          </p>
        </div>
        <div className="right-skill">
          <Skills />
        </div>
        <div className="right-portfoliogallery">
          <PortfolioGallery />
        </div>
        <div className="right-contacticon">
          <ContactIcon />
        </div>
        <div className="right-contactform">
          <ContactForm />
        </div>
        <div className="right-footer">
          <NavFooter />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default RightContent;
