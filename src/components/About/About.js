import React from 'react';
import './About.css';
import skills from './AboutData';

const About = () => {
  return (
    <section className="section-center">
      <div className="about-container">
        <h1>Hi, I'm Donghyun. I'm a Full stack developer based in London </h1>
        <p>I graduated with a Business degree in Korea. And got the chance to move to London not long after graduating. I wanted to experience an entire new world.</p>
        <p>As soon as I moved here, I chose to work as a Barista; in a fast paced customer facing environment to quickly improve my English. </p>
        <p>Whilst working there, I discovered coding. And found it far more interesting than any job I had or anything I've studied in the past.</p>
        <p>I saw the opportunity for me to create a career in something I liked doing. So I took the leap, became unemployed and signed up to coding Bootcamp.</p>
        <p>At the end of 2020, I graduated from Le Wagon coding Bootcamp. I completed my first private project for a client earlier this year and I am currently looking for a job.</p>
      </div>

      <div className="skill-container">
        <div className="title">
          <h2>My skills</h2>
          <div className="underline"></div>
        </div>
        <div className="box-container">
          {skills.map(( {id, title, skills} ) => {
            return (
              <div className="box" key={id}>
                <div className="box-body">
                  <h4 className="title">{title}</h4>
                  <div className={`${skills.length < 4 ? 'flex-list' : 'list-box'}`}>
                  {skills.map((skill, index) => {
                    return (
                      <div className="skill-list" key={index}>
                        <p>{skill}</p>
                      </div>
                    )
                  })}
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