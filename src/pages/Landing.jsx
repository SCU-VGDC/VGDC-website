import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingCarousel from '../components/LandingCarousel';
const stats = [
  { number: '7%', text: 'Increase in fatalities for every 10-minute increase in ambulance journey time.' },
  { number: '2.6%', text: 'Increase in crash fatality odds for every 1-minute increase in EMS response time.' },
  { number: '$340B', text: 'Annual cost of motor vehicle crashes in the U.S. in 2019.' },
  { number: '10s', text: 'Frequency of a car crash involving an injury in the U.S.' },
];

function Landing() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const navigate = useNavigate();

  // Carousel auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 5000); // Change stat every 5 seconds (5000ms)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="container">
          <h1 id = "welcome" >VGDC</h1>
          <p className="subtitle">SCU's Video Game Design Club</p>
        </div>
      </section>

      
<section className="region-input-section">
        
        
      </section>
      {/* Region Input Section */}

      <LandingCarousel />
      
      {/* Stats Carousel Section */}
      <circle className="project-carousel-section">
        <div className="container">
          <h2>Projects we've made</h2>
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
      </circle>
    </div>
  );
};

export default Landing;