import React from 'react';
import '../styles/About.css';

function About() {
  const stats = [
    { number: "35%", text: "Average reduction in response time in high-risk areas." },
    { number: "1200+", text: "High-risk zones monitored monthly." },
    { number: "500+", text: "Potential lives saved annually with optimized deployment." },
    { number: "2M+", text: "Historical crash data points analyzed." },
  ];

  return (
    <div className="page-content container">
      {/* Hero / Intro */}
      <h1>About VGDC (who we are)</h1>
      <p>
        The best club on campus. Nuff said.
      </p>

      {/* Mission */}
      <h2>What we do</h2>
      <p>
        make games n stuff
      </p>

      
    </div>
  );
}

export default About;
