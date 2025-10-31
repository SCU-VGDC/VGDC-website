import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from './DarkToggle';
import { MapCenterContext } from '../context/MapCenterContext';
import logo from '../assets/vgdc_logo_horizontal2.png';

function Header() {
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    const [search, setSearch] = useState('');
    const { searchLocation } = useContext(MapCenterContext);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (search.trim()) {
        const found = await searchLocation(search);
        setSearch('');
        if (found){
          console.log('Location found, navigating to /home');
          navigate('/home');
          
        }
      }
    };

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">
          {/* CHANGE: Link to root path ("/") */}
          <Link to="/">
            <img src={logo}  className="logo-img" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
        <div className='toggle-n-search'>
          <DarkModeToggle/>
        </div>
      </div>
    </header>
  );
}

export default Header;