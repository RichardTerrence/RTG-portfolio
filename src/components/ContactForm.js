import "./ContactForm.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setUserName("");
    setUserEmail("");
    setSendMessage("");

    emailjs
      .sendForm(
        "service_tc7839m",
        "template_gq4ntc6",
        form.current,
        "1WcWaTJGP4-sXFwol"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactForm" id="contact">
      <h6 className="contact-lets">Let's Connect, Send me a message</h6>
      <form className="C-form" ref={form} onSubmit={sendEmail}>
        <div className="formGroup mb-3" controlId="formBasicUserName">
          <div className="formLabel">UserName</div>
          <input
            type="text"
            name="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup mb-3" controlId="formBasicEmail">
          <div className="formLabel">Email</div>
          <input
            type="text"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup mb-3" controlId="formBasicMessage">
          <div className="formLabel">Message</div>
          <input
            style={{ width: "100%", height: "80px" }}
            as="textarea"
            name="message"
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            required
          />
        </div>
        <button
          className="contactButton"
          style={{
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
          type="submit"
          value="Send"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
