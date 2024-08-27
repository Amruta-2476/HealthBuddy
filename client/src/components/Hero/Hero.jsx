import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-top">
        <div className="hero-left">
          <h2 className='hero-heading'>
            <span className="hero-heading-orange">Empower</span> 
            <span className="hero-heading-black"> your </span> 
            <br />
            <span className="hero-heading-black">Health journey</span>
          </h2>
          <p>with personalized care, community support, and seamless medical management for all stages of life.</p> 
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="Hero" />
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-box">
          <h3>Engage with Community</h3>
          <p>Participate in interactive forums to share experiences, seek advice, and connect with others.</p>
        </div>
        <div className="hero-box">
          <h3>Manage Medical Records</h3>
          <p>Store, access, and manage your medical records securely, with easy sharing.</p>
        </div>
        <div className="hero-box">
          <h3>Set Reminders and Schedules</h3>
          <p>Use tools for tracking vaccines, setting medicine reminders, and scheduling check-up reminders.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
