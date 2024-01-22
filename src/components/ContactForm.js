import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
        Form.current,
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
    <>
      <form className="contact-form" id="contact">
        <h6 className="contact-lets">Let's Connect, Send me a message</h6>
        <Form className="C-form" ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label className="C-label">UserName</Form.Label>
            <Form.Control
              type="text"
              name="UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="C-label">Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label className="C-label">Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={sendMessage}
              onChange={(e) => setSendMessage(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            className="C-button"
            style={{
              border: "none",
            }}
            type="submit"
            value="Send"
          >
            Send Message
          </Button>
        </Form>
      </form>
    </>
  );
};

export default ContactForm;
