import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section-center">
      <h1>hello</h1>

      <div className="skill-container">
        <div className="title">
          <h2>My skills</h2>
          <div className="underline"></div>
        </div>
        <div className="box-container">
          <div className="box">
            <div className="box-body">
              <h5>Backend</h5>
              <p>Ruby</p>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <h5>Backend</h5>
              <p>Ruby</p>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <h5>Backend</h5>
              <p>Ruby</p>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <h5>Backend</h5>
              <p>Ruby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;