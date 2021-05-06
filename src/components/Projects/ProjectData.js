import React from 'react';
import Piatto from '../../project-img/piatto.gif';
import Butterbee from '../../project-img/butterbee.gif';
import Portfolio from '../../project-img/portfolio.png';
import Coin from '../../project-img/coin24.gif';


const ProjectData = [
  {
    id: 1,
    title: "Butter Bee Bakery",
    image: Butterbee,
    techs: ["Ruby on Rails", "HTML", "CSS/Sass", "Postgresql", "JavaScript"],
    description: "Website for a private business; Butter Bee Bakery. Users can view products in picture gallery and can place bespoke orders via email. Users can also see social media feed with the latest updates.",
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
    image: Portfolio,
    techs: ['HTML', 'CSS/Sass', 'React'],
    description: "Portfolio website to introduce myself and showcase my projects.",
    website: "https://donghyunkim.herokuapp.com/",
    source: "https://github.com/DonghyunKK/portfolio"
  },
  {
    id: 3,
    title: "Coin24",
    image: Coin,
    techs: ['HTML', 'CSS/Sass', 'React', 'styled-components'],
    description: "A cryptocurrency price tracker for top 100 cryptocurrencies with data fetched from Coingecko's API. User can also use DarkMode Theme.",
    website: "https://coin24.netlify.app/",
    source: "https://github.com/DonghyunKK/cryptocurrency-price-tracker"
  }
];

export default ProjectData;