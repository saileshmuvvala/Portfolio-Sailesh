// Current.js

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const PROJECTS = [
  {
    id: 1,
    title: "Chat Bot App",
    description:
      "AI-powered chatbot web application built with React and Gemini API that allows users to interact with an intelligent assistant in real time. The project features a responsive chat interface, message history, auto-scrolling, and a toggleable chatbot popup, providing a smooth conversational experience. Deployed using Netlify for live access.",
    functionalArea: "Customer Interaction / Automation",
    technologyUsed: "React.js, JavaScript, CSS3, Vite, Gemini API",
    image: project1, // using actual imported image
    link: "https://ai-chatbot-sailesh.netlify.app",
  },
  {
    id: 2,
    title: "Natours Project",
    description:
      "A web application built using Node.js, Express.js, MongoDB, and modern JavaScript that allows users to explore and book tours. The backend provides RESTful APIs, user authentication with JWT, role-based access control, and advanced features like filtering, sorting, pagination, image uploading (Multer & Sharp), and secure payments integration using Stripe. The project demonstrates real-world backend architecture, API design, and database management using MongoDB and Mongoose.",
    functionalArea: "Tourism / Backend API",
    technologyUsed:
      "Node.js, Express.js, MongoDB, Mongoose, Multer, Sharp, Mapbox",
    image: project2, // using actual imported image
    link: "https://sailesh-natours.onrender.com/",
  },
  {
    id: 3,
    title: "Notes App",
    description:
      "A full-stack notes management application built using MongoDB, Express.js, React, and Node.js (MERN Stack). The app allows users to create, update, and delete notes with a clean and responsive interface. It also includes a Dark Mode / Light Mode toggle for better user experience. The frontend is developed using React, while the backend provides RESTful APIs using Node.js and Express, connected to MongoDB Atlas for data storage. The application is deployed with Netlify (frontend) and Render (backend).",
    functionalArea: "Productivity / Note Management",
    technologyUsed: "React.js, Node.js, Express.js, MongoDB",
    image: project3, // using actual imported image
    link: "https://notes-app-sailesh.netlify.app",
  },
  {
    id: 3,
    title: "SKY Touch Delicious Food",
    description:
      "A responsive multi-page restaurant website built using HTML5 and CSS3. It includes pages like Home, About, Menu, and Contact, with a responsive navigation bar, food menu sections, and Google Maps location integration. The project focuses on clean layout design, reusable CSS components, and responsive structure. The website is deployed online using Netlify.",
    functionalArea: "Restaurant / Business Website",
    technologyUsed: "HTML5, CSS3",
    image: project4, // using actual imported image
    link: "https://sky-delicious-food.netlify.app",
  },
];

export default PROJECTS;
