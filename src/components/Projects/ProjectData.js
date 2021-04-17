import React from 'react';
import piatto from '../../project-img/piatto';
import butterbee from '../../project-img/butterbee';


const ProjectData = [
  {
    title: "Butter Bee Bakery",
    image: {butterbee},
    techs: ['Ruby on Rails', 'HTML', 'CSS/Sass', 'Postgresql', 'JavaScript'],
    description: "",
    website: "https://www.butterbeebakery.co.uk",
    source: "https://github.com/DonghyunKK/butterbee"
  },
  {
    title: "Piatto",
    image: {piatto},
    techs: ['Ruby on Rails', 'HTML', 'CSS/Sass', 'Postgresql', 'JavaScript'],
    description: "",
    website: "https://www.piat.to",
    source: "https://github.com/liamjcksn/piatto"
  },
  {
    title: "Portfolio",
    image: {piatto},
    techs: ['HTML', 'CSS/Sass', 'React'],
    description: "",
    website: "https://www.piat.to",
    source: "https://github.com/DonghyunKK/portfolio"
  }
];

export default ProjectData;