import { Link } from "react-router-dom"
import aboutpic from "./assets/WorkProfilePic.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Justin Kelley',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Justin Kelley',
  role: 'Full stack developer',
  description:
    'UCF bootcamp student living in Orlando, Florida. Highly interested in cutting edge technology, web development and Java back end development.',
  resume: 'https://drive.google.com/file/d/1P8jZLmcUI93h7aGQ_jbFXEfI6fsIGkSw/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/linkjustinkelley/',
    github: 'https://github.com/pingjustin',
    stackoverflow: 'https://stackoverflow.com/users/30162195/pingjustin',
  },
}

const projects = [
  {
    name: 'Weather Dashboard',
    description:
      'This Weather Dashboard is a full-stack TypeScript application that allows users to search for weather conditions in different cities using the OpenWeather API, displaying current conditions and maintaining a search history of the last 5 queries.',
    stack: ['HTML5 & CSS3', 'Bootstrap (for responsive design)', 'TypeScript/JavaScript','Node.js', 'Express.js', 'ES Modules', 'OpenWeather API (weather data)', 'File System API (search history storage)'],
    sourceCode: 'https://github.com/pingJustin/weatherDashboard',
    livePreview: 'https://weatherdashboard-rbpg.onrender.com/',
  },
  {
    name: 'Vehicle Builder',
    description:
      'This is a TypeScript-based command-line interface (CLI) application that allows users to create and manage different types of vehicles (cars, trucks, and motorbikes) with various properties and actions like starting, accelerating, turning, and towing.',
    stack: ['TypeScript:', 'Node.js','npm','npm-inquirer','npm-chalk','npm-figlet', 'npm-clear', 'npm-chalk'],
    sourceCode: 'https://github.com/pingJustin/vehicleBuilder',
    livePreview: '',
  },
  {
    name: 'Employee Tracker',
    description:
      "This project is a command-line application for managing a company's employee database using Node.js, Inquirer, and PostgreSQL.",
    stack: ['hNode.js', 'PostgreSQL', 'Node.js PostgreSQL client (pg)', 'Inquirer', 'dotenv', 'console.table'],
    sourceCode: 'https://github.com/pingJustin/employeeTracker',
    livePreview: '',
  },
  {
    name: 'Placeholder',
    description:
      'Placeholder description',
    stack: ['Placeholder stack'],
    sourceCode: 'https://github.com/pingJustin',
    livePreview: '',
  },
  {
    name: 'Placeholder',
    description:
      'Placeholder description',
    stack: ['Placeholder stack'],
    sourceCode: 'https://github.com/pingJustin',
    livePreview: '',
  },
  {
    name: 'Placeholder',
    description:
      'Placeholder description',
    stack: ['Placeholder stack'],
    sourceCode: 'https://github.com/pingJustin',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  '.Net',
  'SQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Microservices',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pingjustin@gmail.com',
}

const social = {
  linkedin: 'https://www.linkedin.com/in/linkjustinkelley',
  github: 'https://github.com/pingjustin',
  stack: 'https://stackoverflow.com/users/30162195/pingjustin',
}

export { header, about, projects, skills, contact, social }
