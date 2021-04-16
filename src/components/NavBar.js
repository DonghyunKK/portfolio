import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  return (
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <button className="nav-toggle">
                <FaBars />
              </button>
            </div>  
          </div>
          <div className="links-container">
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
        </nav>
  )
}

export default NavBar;