import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeToggle } from './DarkToggle';
import logo from '../assets/vgdc_logo_horizontal2.png';

function Header() {
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