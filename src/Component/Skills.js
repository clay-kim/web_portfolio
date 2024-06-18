import React from 'react'
import './Skills.css'
import photoshop from '../Assets/icons/photoshop.png'
import illust from '../Assets/icons/illustrator.png'
import figma from '../Assets/icons/figma.png'
import paint from '../Assets/icons/paint.png'
import html from '../Assets/icons/html.png'
import js from '../Assets/icons/js.png'
import css from '../Assets/icons/css.png'
import cSharp from '../Assets/icons/c-sharp.png'
import agile from '../Assets/icons/agile.png'
import java from '../Assets/icons/java.png'
import react from '../Assets/icons/react.png'
import sql from '../Assets/icons/mysql.png'
import json from '../Assets/icons/json.png'
import aws from '../Assets/icons/aws.png'


function Skills() {
    return (

        <section className='skills section' id='skills'>
            <div className="skills_container">

                <div className="contents">
                    <h1 className="title">Skills</h1>
                    <p>Things I mostly familiar with</p>
                </div>

                <div className="skills_box">

                    <div className="design_container">
                        <div className="skill_title">Design</div>
                        <div className="item_container">
                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={photoshop} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>Photoshop</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={illust} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>illustrator</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={figma} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>Figma</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={paint} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>Fine Art</p>
                                </div>
                            </div>

                            <div className="items">
                            <div className="icon-wrapper">
                                <img src={agile} className='iconImg' />
                            </div>
                            <div className="project-name">
                                <p>Agile</p>
                            </div>
                        </div>




                        </div>
                    </div>


                    <div className="program_container">
                        <div className="skill_title">Code</div>
                        <div className="item_container">
                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={html} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>HTML</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={js} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>JavaScript</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={css} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>CSS</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={java} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>Java</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={cSharp} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>C#</p>
                                </div>
                            </div>


                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={react} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>React JS</p>
                                </div>
                            </div>

                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={sql} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>MySql</p>
                                </div>
                            </div>


                            <div className="items">
                                <div className="icon-wrapper">
                                    <img src={json} className='iconImg' />
                                </div>
                                <div className="project-name">
                                    <p>jQuery</p>
                                </div>
                            </div>

                            <div className="items">
                            <div className="icon-wrapper">
                                <img src={aws} className='iconImg' />
                            </div>
                            <div className="project-name">
                                <p>Cloud</p>
                            </div>
                        </div>


                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Skills