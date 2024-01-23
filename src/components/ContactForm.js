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
        <div className="formGroup mb-3" controlid="formBasicUserName">
          <div className="formLabel">Name</div>
          <input
            type="text"
            id="userName"
            name="userName"
            autoComplete="fullName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            minLength={4}
            maxLength={20}
          />
        </div>
        <div className="formGroup mb-3" controlid="formBasicEmail">
          <div className="formLabel">Email</div>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            autoComplete="off"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup mb-3" controlid="formBasicMessage">
          <div className="formLabel">Message</div>
          <input
            style={{ width: "100%", height: "80px" }}
            as="textarea"
            id="sendMessage"
            name="sendMessage"
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
