import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <h2>LUXORA</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <p className="small-title">
            TIMELESS ELEGANCE
          </p>

          <h1>
            Jewellery
            <br />
            <span>That Defines You</span>
          </h1>

          <p className="description">
            Discover beautiful jewellery made to
            make every moment special.
          </p>

          <Link to="/shop" className="btn">
            Shop Collection →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80"
            alt="Luxury Jewellery"
          />
        </div>

      </section>

      {/* Collection Section */}
      <section className="collection">

        <p className="collection-title">
          OUR COLLECTION
        </p>

        <h2>Shop By Category</h2>

        <div className="cards">

          {/* Necklace */}
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80"
              alt="Necklace"
            />
            <h3>Necklaces</h3>
          </div>

          {/* Ring */}
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80"
              alt="Ring"
            />
            <h3>Rings</h3>
          </div>

          {/* Earrings */}
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80"
              alt="Earrings"
            />
            <h3>Earrings</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;

