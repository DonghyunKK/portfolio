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
            <p>{techs}</p>
          </div>
          <div className="project-links-container">
            <a href={website} target="_blank" > LIVE </a>
            <a href={source} target="_blank" > SOURCE CODE </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;