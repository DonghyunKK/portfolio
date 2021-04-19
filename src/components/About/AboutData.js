import React from 'react';
import { VscServerProcess, VscWindow, VscTools, VscOrganization } from "react-icons/vsc";

const AboutData = [
  {
    id: 1,
    icon: <VscServerProcess />,
    title: 'Backend',
    skills: ['Ruby', 'Ruby on Rails', 'PostgreSQL']
  },
  {
    id: 2,
    icon: <VscWindow />,
    title: 'Frontend',
    skills: ['Html', 'Css', 'Sass', 'Bootstrap', 'JavaScript', 'React']
  },
  {
    id: 3,
    icon: <VscOrganization />,
    title: 'Collaboration',
    skills: ['Git', 'Github', 'Trello', 'Slack']
  },
  {
    id: 4,
    icon: <VscTools />,
    title: 'Design / Deploy',
    skills: ['Figma', 'Heroku']
  },
];

export default AboutData;