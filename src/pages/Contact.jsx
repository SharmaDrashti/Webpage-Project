import React from "react";
import "../CSS/Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <p>GET IN TOUCH</p>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>We'd Love To Hear From You</h2>

          <p>
            Have a question about our jewellery?
            Send us a message and our team will
            get back to you.
          </p>

          <div className="contact-item">
            <span>✉</span>
            <div>
              <h4>Email</h4>
              <p>info@aurelia.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>☎</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>⌖</span>
            <div>
              <h4>Address</h4>
              <p>Ahmedabad, Gujarat, India</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            SEND MESSAGE
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;