import React from 'react'
import './Projects.css'
import SingleProject from './SingleProject.js'

import project1Image from '../Assets/projectPic/bible.png';
import project2Image from '../Assets/projectPic/flower.png';
import project3Image from '../Assets/projectPic/gcart.png';
import project4Image from '../Assets/projectPic/figma.png';



function Projects() {

  const projectData = [
    {
      title: "Bible Tracker",
      description: {
        brief: "Capstone Project focused on developing a web application for tracking Bible verse reading progress across the entire Bible. Provides insightful data visualizations based on user reading habits.",
        features: [
          "Data visualization to present reading progress",
          "Store and retrieve user's data and notes",
          "Daily random bible verse",
          "Login functions"

        ],
        tools: [
          "AWS RDS (MySQL)",
          "AWS Lambda, API Gateway",
          "React.js, CSS, JavaScript",
          "Chart.js "
        ],
      },
      image: project1Image,
      demoLink: "",
      githubLink: "https://github.com/clay-kim/BibleTracker",
      skills: ["React", "AWS", "MySQL", "API", "Chart"]
    },
    {
      title: "Flower studio",
      description: {
        brief: "React-based web application promotes Studio Batté, a floral design studio in Seattle, WA. It features scroll-based animations and sections highlighting the studio's services and inspirations.",
        features: [
          "Single-page website",
          "Responsive design",
          "Interactive contact form"

        ],
        tools: [
          "React.js, CSS, JavaScript",
          "AOS Library, EmailJS, Framer Motion",
        ],
      },
      image: project2Image,
      demoLink: "https://studio-batte.netlify.app",
      githubLink: "https://github.com/clay-kim/clay-react-batte",
      skills: ["SinglePage", "CSS", "JavaScript","Animation"]
    },
    {
      title: "Artist Portfolio",
      description: {
        brief: "React-based web application designed to showcase an artist's artwork, background, exhibitions, and store, as well as provide a contact page for inquiries and communication.",
        features: [
          "Single-page website",
          "Responsive design",
          "Interactive contact form"

        ],
        tools: [
          "React.js, CSS, JavaScript",
          "EmailJS, Bootstrap",
        ],
      },
      image: project3Image,
      demoLink: "https://gc-clay-art.netlify.app",
      githubLink: "https://github.com/clay-kim/artist-demo",
      skills: ["Artist", "Web", "Portfolio", "React.js"]
    },
    {
      title: "Pet Companion",
      description: {
        brief: "PetCompanion is a mobile application prototype designed to enhance the pet ownership experience. As the UI/UX Designer in this group project, I aimed to create a user-friendly interface and intuitive design, focusing on the needs of pet owners.",
        features: [
          "User friendly design",
          "Prototype design",
          

        ],
        tools: [
          "Figma",
          "Agile, Market Opportunity Navigator",
        ],
      },
      image: project4Image,
      demoLink: "https://www.figma.com/proto/dti02EteailHKR1tkrIf2S/Untitled?node-id=0-1&t=w2rTF6ydTHWX5XQd-1",
      skills: ["Figma", "UX/UI","Agile", "Design", "MobileApp"]
    }
  ];


  return (

    <section className='projects section' id='projects'>
      <div className="projects_container">
        <div className="contents_project">
          <h1 className="title">Projects</h1>
          <p></p>
        </div>
        <div className="box">
          {projectData.map((project, index) => (
            <div className="card_container" key={index}>
              <SingleProject
                title={project.title}
                description={project.description}
                image={project.image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                skills={project.skills}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Projects