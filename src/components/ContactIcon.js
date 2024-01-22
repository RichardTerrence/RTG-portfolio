import React from "react";
import "./ContactIcon.css";

const ContactIcon = () => {
  return (
    <div className="c-container">
      <h5 className="c-icontitle">Contact Me</h5>
      <div className="c-icon">
        <i className="fa fa-map-marker" style={{ fontSize: "36px" }}></i>
        <h6>Location: Phillippines</h6>
      </div>
      <div className="c-icon">
        <i className="fa fa-phone" style={{ fontSize: "36px" }}></i>
        <h6>Phone: +63 956 499 8013</h6>
      </div>
      <div className="c-icon">
        <i className="fa fa-envelope" style={{ fontSize: "36px" }}></i>
        <h6>Email: richardterrencego@gmail.com</h6>
      </div>
    </div>
  );
};

export default ContactIcon;
