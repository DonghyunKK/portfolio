import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from '../../logo.svg';
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
              <NavLink to="/" exact >
                <img src={logo} alt="logo" className="logo" />
              </NavLink>
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
            <ul className="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/donghyun-kim/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </li>
              <li>
                <a href="https://github.com/DonghyunKK" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </li>
              <li>
                <a href="mailto:donghyunkim524@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default NavBar;