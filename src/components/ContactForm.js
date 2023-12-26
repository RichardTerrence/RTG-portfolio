import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setUserName("");
    setUserEmail("");
    setSendMessage("");

    emailjs
      .sendForm(
        "service_tc7839m",
        "template_xav5bfm",
        Form.current,
        "QBx9YZMdtcbLsc9j7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          window.alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <h6 className="contact-lets">Let's Connect, Send me a message</h6>
      <Form className="C-form" ref={Form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicFullname">
          <Form.Label className="C-label">Fullname</Form.Label>
          <Form.Control
            type="fullname"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="C-label">Email</Form.Label>
          <Form.Control
            type="email"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label className="C-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="sendMessage"
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
    </div>
  );
};

export default ContactForm;
