import React from "react";
import "./NavFooter.css";
import ScrollToTop from "react-scroll-to-top";

const NavFooter = () => {
  return (
    <>
      <div className="N-footer">
        <nav
          className="navbar navbar-expand-sm justify-content-center"
          style={{ height: "210px" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/rex14storm/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa fa-facebook-official"
                  style={{ fontSize: "36px" }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa fa-linkedin-square"
                  style={{ fontSize: "36px" }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/RichardTerrence"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ScrollToTop
        smooth
        top="20"
        className="T-top"
        style={{ background: "#DCD7C9", zIndex: "99" }}
      />
    </>
  );
};

export default NavFooter;
