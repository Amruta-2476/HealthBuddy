import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
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
              <img src={hero_image} alt="" />
          </div>
    </div>
  )
}

export default Hero
