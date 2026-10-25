import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>AURELIA</h2>
          <p>
            Timeless jewellery crafted with elegance,
            passion and love.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h3>Categories</h3>
          <p>Necklaces</p>
          <p>Rings</p>
          <p>Earrings</p>
          <p>Bracelets</p>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: info@aurelia.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Ahmedabad, Gujarat</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Aurelia Jewellery. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;