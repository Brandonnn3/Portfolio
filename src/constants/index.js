import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    csharp,
    censusapp,
    reactjs,
    nodejs,
    mongodb,
    
    figma,
    docker,
    bags,
    publix,
    transcore,
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
      id: "work",
      title: "Work",
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
      title: "Backend Developer",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
       name: "C#",
      icon : csharp
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
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "ISCS Support Desk Associate",
      company_name: "Publix",
      icon: publix,
      iconBg: "#3E902D",
      date: "Apr 2023 - Present",
      points: [
        "Resolving incoming client and personnel IT queries remotely via email and phone, or at the office.",
        "Prioritizing and resolving IT concerns and escalating serious issues to relevant stakeholders.",
        "Documenting processes and maintaining service desk records.",
        "Making recommendations to optimize IT performance and to prevent future problems.",
        "Collaborating with internal departments to ensure that IT needs are met."
      ],
    },
    
    {
      title: "Product Support Representative",
      company_name: "Transcore",
      icon: transcore,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Apr 2023",
      points: [
        "Facilitated inventory turnover and product availability by reviewing and adjusting inventory levels and production schedules.",
        "Created help desk tickets, troubleshot and resolved desktop issues.",
        "Offered new customers training to reduce frustration and improve customer satisfaction.",
        "Determined hardware and network system issues using proactive troubleshooting techniques.",
        "Answered questions and provided information to customers about new software or hardware.",
        "Promoted efficiency among departments with prompt resolution of system issues."
      ],
    },

    {
      title: "Parking Operations Supervisor",
      company_name: "Bags",
      icon: bags,
      iconBg: "#fff100",
      date: "Mar 2020 - Aug 2022",
      points: [
        "Motivated and trained employees to maximize team productivity.",
        "Evaluated team member performance and productivity, provided feedback and implemented corrective actions.",
        "Enhanced operational performance and reduced labor expenses by developing and optimizing standard practices.",
        "Enforced regulatory and company policy compliance to improve workplace and employee safety and readiness.",
        "Assisted customers with questions and problems to build brand loyalty and cultivate lasting business relationships.",
      ],
    }
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
      name: "Census App",
      description:
        "Application transforms census data via backend randomization, ensuring anonymity. Its frontend displays this data in a user-friendly, legible format, making insights accessible and straightforward.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },

      ],
      image: censusapp,
      source_code_link: "https://github.com/Brandonnn3/CensusApp",
    },
    {
      name: "Mood Reads Website",
      description:
        "Project Manager for Mood Reads website development. Collaborated with a team of 9 to meet the client's goals.",
      tags: [
        {
          name: "bitbucket",
          color: "blue-text-gradient",
        },
        {
          name: "render",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://mood-reads-website.onrender.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
