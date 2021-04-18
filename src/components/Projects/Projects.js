import React from 'react';
import ProjectData from './ProjectData';
import Project from './Project/Project';
import './Projects.css';

const Projects = () => {
  return (
    <div className="page-container">
    <h1>My Projects</h1>
    <div className="projects-container">
      {
        ProjectData.map(( {id, title, image, techs, description, website, source } ) => {
          return (
            <Project key={id} title={title} image={image} techs={techs} description={description} website={website} source={source} />
          )
        })
      }
    </div>
    </div>
  )
}

export default Projects;