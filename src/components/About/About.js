import React from 'react';
import './About.css';
import skills from './AboutData';

const About = () => {
  return (
    <section className="section-center">
      <div className="about-container">
        <h1>hello</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque sit pariatur minima impedit commodi praesentium delectus soluta adipisci est? Quasi necessitatibus ipsum fugit magni incidunt illum ex sint quisquam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illum cupiditate sint quidem id ipsam numquam dolor mollitia delectus! Sunt delectus provident cupiditate esse neque. At repellendus velit esse rerum, eveniet a sapiente necessitatibus deserunt optio praesentium officiis quia quas tempore fugit repudiandae odio? Porro beatae omnis dolorem doloribus quas quod ut excepturi rem non! Voluptatibus id adipisci ducimus sint?</p>
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
                  {/* <div className="list-box"> */}
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