import React, { useState, useEffect } from 'react'
import LandingCarousel from '../components/LandingCarousel'
import VGDCLogoController from '../assets/vgdc_logo_big.png'

function Landing(): React.ReactElement {
  const [_currentStatIndex, setCurrentStatIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="container">
          <img
            src={VGDCLogoController}
            className="landing-logo"
            alt="VGDC Logo"
          />
          <h1 id="welcome">VGDC</h1>
          <p className="subtitle">SCU&apos;s Video Game Design Club</p>
        </div>
      </section>

      <section className="region-input-section" />

      <LandingCarousel />

      <section className="project-carousel-section">
        <div className="container">
          <h2>Projects we&apos;ve made</h2>
          <div className="project-carousel-container">
            <div className="project-carousel-track">
              <div className="stat-box">
                <span className="stat-number">Project D</span>
                <p className="stat-text">A game we made</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">Azurite</span>
                <p className="stat-text">another game we made</p>
              </div>
              <div className="stat-box">
                <span className="stat-number">Uhh</span>
                <p className="stat-text">idk what to put here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
