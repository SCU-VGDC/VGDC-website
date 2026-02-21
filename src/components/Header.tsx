import React from 'react'
import { Link } from 'react-router-dom'
import { DarkModeToggle } from './DarkToggle.tsx'
import logo from '../assets/vgdc_logo_horizontal2.png'

function Header(): React.ReactElement {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo-img" alt="VGDC" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
        <div className="toggle-n-search">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
