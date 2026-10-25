import React from "react";
import "../CSS/About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-banner">
        <p>OUR STORY</p>
        <h1>About Aurelia</h1>
      </div>

      <div className="about-container">

        <div className="about-image">
          ✦
        </div>

        <div className="about-content">

          <p className="gold-text">
            CRAFTED WITH LOVE
          </p>

          <h2>
            Jewellery With
            <br />
            A Story
          </h2>

          <p>
            Aurelia was created with one simple idea:
            jewellery should be more than an accessory.
            It should express your personality,
            memories and unique style.
          </p>

          <p>
            Our collections combine timeless designs
            with modern elegance. Each piece is carefully
            crafted with attention to every detail.
          </p>

          <div className="about-stats">
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>50K+</strong>
              <span>Happy Customers</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Unique Designs</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;