import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Optional: Use this if you're using react-icons

const about = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          About <span className="highlight">Us</span>
        </h2>
        <div className="about-content fade-in">
          <p>
            We are a team of passionate individuals dedicated to creating
            beautiful and functional websites. Our mission is to help businesses
            establish a strong online presence and achieve their goals.
          </p>
          <p>
            With years of experience in web design and development, we take
            pride in delivering high-quality solutions tailored to our clients'
            needs. Whether you're a small startup or a large corporation, we
            have the expertise to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
