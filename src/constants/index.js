import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Python programming",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  
  ];
  
  const educations = [
    {
      title: "10th Grade",
    
      date: "March 2015 - April 2016",
      points: [
        "Successfully completed 10th grade at St. Martin's Matriculation School with 84% marks."
      ],
    },
    {
      title: "12th Grade",
    
      date: "Jan 2017 - Feb 2018",
      points: [
        "Successfully completed 12th grade at St. Dhava Amudham Matriculation Higher Secondary School with 77% marks.",
      ],
    },
    {
      title: "Bachelor of Engineering in Computer Science",
     
      date: "Jan 2020 - jun 2024",
      points: [
        "Graduated with a degree in Engineering from Dhanalakshmi College of Engineering with a CGPA of 7.8.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Error Recovery Process in Blockchain",
      description:
      " Implements robust mechanisms for detecting and correcting errors in blockchain transactions. Ensures data integrity and consistency by quickly recovering from faults and preventing data corruption."      
    },
    {
      name: "Travel Companion:",
      description:
      "Utilizes Google Maps and Places APIs to offer real-time geo-location and local recommendations. It helps users plan trips by suggesting attractions, restaurants, and accommodations."
    },
    {
      name: "Real Estate App",
      description:
      "Users can browse, rent, and sell properties with detailed listings and interactive maps. It provides comprehensive insights and connects users with real estate agents."     
    },
  ];
  
  export { services, technologies,educations, testimonials, projects };