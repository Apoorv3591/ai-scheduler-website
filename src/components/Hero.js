// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>AI Scheduler Agent</h1>
          <p>
            Let your AI assistant manage email scheduling, handle calendar conflicts,
            and confirm meetings automatically.
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
