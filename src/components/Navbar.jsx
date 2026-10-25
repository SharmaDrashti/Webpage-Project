import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>✦</span> AURELIA
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-icons">
        <span>⌕</span>
        <span>♡</span>
        <span>🛍</span>
      </div>
    </nav>
  );
}

export default Navbar;