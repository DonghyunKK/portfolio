import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../Logo.png'

const NavBar = () => {
  return (
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt="logo" className="logo" />
              <button className="nav-toggle">
                <FaBars />
              </button>
            </div>  
            <div className="links-container show-container">
              <NavLink to="/" exact className="links">
                Home
              </NavLink>
              <NavLink to="/about" className="links">
                About
              </NavLink>
              <NavLink to="/projects" className="links">
                Projects
              </NavLink>
            </div>
          </div>
        </nav>
  )
}

export default NavBar;