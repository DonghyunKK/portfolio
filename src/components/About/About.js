import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import skills from './AboutData';

const About = () => {
  return (
    <section className="section-center">
      <div className="about-container">
        <div className="title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="intro-size">
          <h1>Hi, I'm Donghyun.</h1>
          <h1>I'm a Full stack developer based in London.</h1>
        </div>
        <p className="about-text">I graduated with a Business degree in Korea. And got the chance to move to London not long after graduating. I wanted to experience an entire new world.</p>
        <p className="about-text">As soon as I moved here, I chose to work as a Barista; in a fast paced customer facing environment to quickly improve my English. </p>
        <p className="about-text">Whilst working there, I discovered coding. And found it far more interesting than any job I had or anything I've studied in the past.</p>
        <p className="about-text">I saw the opportunity for me to create a career in something I liked doing. So I took the leap, became unemployed and signed up to coding Bootcamp.</p>
        <p className="about-text">At the end of 2020, I graduated from Le Wagon coding Bootcamp. I completed my first private project for a client earlier this year and I am currently looking for a job.</p>
        <p className="about-text">
          <Link to='/projects' className="link-text">
            View my projects
          </Link>
        </p>
      </div>

      <div className="skill-container">
        <div className="title">
          <h2>My skills</h2>
          <div className="underline"></div>
        </div>
        <div className="box-container">
          {skills.map(( {id, icon, title, skills} ) => {
            return (
              <div className="box" key={id}>
                <div className="icon">{icon}</div>
                <div className="box-body">
                  <h4 className="skill-title">{title}</h4>
                  <div className={`${skills.length < 4 ? 'flex-list' : 'list-box'}`}>
                  <ul>
                  {skills.map((skill, index) => {
                    return (
                      <div className="skill-list" key={index}>
                        <li className="skill">{skill}</li>
                      </div>
                    )
                  })}
                  </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About;