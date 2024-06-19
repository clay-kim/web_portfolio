import React from 'react'
import './Projects.css'
import SingleProject from './SingleProject.js'

function Projects() {
  return (

    <section className='projects section' id='projects'>
      <div className="projects_container">

        <div className="contents_project">
          <h1 className="title">Projects</h1>
          <p>Things I worked on</p>
        </div>


        <div className="box">
          <div className="card_container">
            <SingleProject />
          </div>

          <div className="card_container">
            <SingleProject />
          </div>

          <div className="card_container">
            <SingleProject />
          </div>
   
        <div className="card_container">
            <SingleProject />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Projects