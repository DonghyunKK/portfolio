import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="banner">
      <div className="text-center">
        <h1>Hello.</h1>
        <h2>I'm Donghyun Kim</h2>
        <p className="text">Full Stack Web Developer from London</p>
        <Link to='/about' className="link-text">
          Find out more
        </Link>
      </div>
    </div>
    </>
  )
}

export default Home;