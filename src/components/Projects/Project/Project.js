import React from 'react';
import './Project.css';

const Project = ( { title, image, techs, description, website, source } ) => {
  return (
    <div className="project-section">
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} className="image" />
        </div>
        <div className="project-info">
          <div className="project-title">
            <h3>{title}</h3>
          </div>
          <div className="project-desc">
            <p>{description}</p>
            <div className="techs">
              <p className="tech-title">Coded with</p>
              {/* <p>{techs}</p> */}
              <ul>
                {techs.map((tech, index) => {
                  return (
                    <li key={index}>{tech}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="project-links-container">
            <a href={website} target="_blank" rel="noopener noreferrer" className="link-text"> LIVE </a>
            <a href={source} target="_blank" rel="noopener noreferrer" className="link-text"> SOURCE CODE </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;