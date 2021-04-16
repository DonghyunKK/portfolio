import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../Logo.png';
import './NavBar.css';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt="logo" className="logo" />
              <button 
                className="nav-toggle"
                onClick={() => setShowLinks(!showLinks)}
              >
                <FaBars />
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <div className="links-height" ref={linksRef}>
                <NavLink to="/" exact className="links" >
                  Home
                </NavLink>
                <NavLink to="/about" className="links" >
                  About
                </NavLink>
                <NavLink to="/projects" className="links" >
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
  )
}

export default NavBar;