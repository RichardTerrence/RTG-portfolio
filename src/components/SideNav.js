import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./SideNav.css";

const SideNav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div className="container">
        <nav ref={navRef} className="topnav">
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#mydesign">Portfolio</a>
          <a href="#contact">Contact</a>
          <button className="nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default SideNav;
