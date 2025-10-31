import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { MapCenterContext } from '../context/MapCenterContext';

function Home() {
  return (
    <div className="page-content container">
      {/* Hero / Intro */}
      <h1>Welcome home.</h1>
      <p>
        This is probably where we'll display detailed info about our projects.
      </p>
      <p>
        Add images and videos and stuff
      </p>
      
    </div>
  );

}

export default Home;
