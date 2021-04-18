import React from 'react';
import Piatto from '../../project-img/piatto.gif';
import Butterbee from '../../project-img/butterbee.gif';


const ProjectData = [
  {
    id: 1,
    title: "Butter Bee Bakery",
    image: Butterbee,
    techs: "Ruby on Rails, HTML, CSS/Sass, Postgresql, JavaScript",
    description: "ButterBee is website for a private business; Butter Bee Bakery. Users can find bakery's products with pictures and can place bespoke orders via email. Users can also find bakery's limited edition and SNS feed is real time",
    website: "https://www.butterbeebakery.co.uk",
    source: "https://github.com/DonghyunKK/butterbee"
  },
  {
    id: 2,
    title: "Piatto",
    image: Piatto,
    techs: ['Ruby on Rails', 'HTML', 'CSS/Sass', 'Postgresql', 'JavaScript'],
    description: "Piatto was built by myself and a team of 3 others as our final project for Le Wagon coding bootcamp. Piatto is a social network dish discovery platform to find and share your dishes based on your taste and network. Users can make their own dishlist with their favorite dishes. Users can also follow other users and check dishlist of their network. According to current location, users can order same dish from their network or can order similar dish around their location suggested by Piatto.",
    website: "https://www.piat.to",
    source: "https://github.com/liamjcksn/piatto"
  },
  {
    id: 3,
    title: "Portfolio",
    image: Piatto,
    techs: ['HTML', 'CSS/Sass', 'React'],
    description: "Portfolio website to showcase my projects and about me",
    website: "https://www.piat.to",
    source: "https://github.com/DonghyunKK/portfolio"
  }
];

export default ProjectData;