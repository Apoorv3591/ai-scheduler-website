import React from 'react';
import Lottie from 'lottie-react';
import '../styles/Features.css';

import readingAnimation from '../assets/reading.json';
import calendarAnimation from '../assets/calendar.json';
import robotAnimation from '../assets/robot.json';

const steps = [
  {
    title: 'Understands Email Intent',
    description: 'Reads and extracts context from natural language emails using AI.',
    animation: readingAnimation,
  },
  {
    title: 'Creates Calendar Options',
    description: 'Works behind the scenes to find and organize optimal time slots.',
    animation: calendarAnimation,
  },
  {
    title: 'Schedules Automatically',
    description: 'Adds events to your calendar without manual effort.',
    animation: robotAnimation,
  },
];

function Features() {
  return (
    <section className="what-section">
      <h2 className="section-heading">🤖 What Our Agent Can Do</h2>
      <div className="what-grid">
        {steps.map((step, index) => (
          <div className="what-card" key={index}>
            <Lottie animationData={step.animation} loop={true} className="what-lottie" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
