import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Contact.css";

const Contact = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = formData;

    try {
      const response = await fetch(
        "https://e-commerce-contact-93755-default-rtdb.firebaseio.com/Message.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Name, Email, Subject, Message }),
        }
      );

      if (response.ok) {
        alert("Your message has been sent.");
        setFormData({ Name: "", Email: "", Subject: "", Message: "" });
      } else {
        throw new Error("Failed to send the message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-about">
        <h2 className="contactus"># Contact Us</h2>
        <div className="contact-form">
          <form method="POST" onSubmit={sendData}>
            <input
              type="text"
              name="Name"
              value={user?.name || formData.Name}
              placeholder="Enter Your Full Name"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="Email"
              value={formData.Email}
              placeholder="Enter Your E-mail"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="Subject"
              value={formData.Subject}
              placeholder="Enter Your Subject"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            <textarea
              name="Message"
              value={formData.Message}
              placeholder="Your Message"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            {isAuthenticated ? (
              <button className="button" type="submit">
                Send
              </button>
            ) : (
              <button
                className="button"
                type="button"
                onClick={loginWithRedirect}
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
