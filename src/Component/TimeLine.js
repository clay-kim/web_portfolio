import React, { useState } from 'react'
import './TimeLine.css'
import { CiCalendar } from "react-icons/ci";
import Skills from './Skills';

function TimeLine() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }



    return (
        <section className="timeLine section">
            <div className="timeLine_container">
                <h2 className='section_title'>Experience</h2>
                <div className="skill_container">
                    <Skills />
                </div>


                <div className='timeLine_box'>
                <p className='section_subtitle'>My personal journey</p>
                    <div className='timeLine_tabs'>
                        <div className={toggleState === 1 ? "timeLine_button_active" : "timeLine_button"}
                            onClick={() => toggleTab(1)}>
                            <i className='timeLine_icon'>Education</i>
                        </div>

                        <div className={toggleState === 2 ? "timeLine_button_active" : "timeLine_button"}
                            onClick={() => toggleTab(2)}>
                            <i className='timeLine_icon'>Work History</i>
                        </div>
                    </div>




                    <div className='timeLine_sections'>

                        <div className={toggleState === 1 ? "timeLine_content timeLine_content-active" : "timeLine_content"}>

                            <div className='timeLine_data'>
                                <div>
                                    <h3 className='timeLine_title'>BS, Information Technology</h3>
                                    <span className='timeLine_subtitle'>Lake Washington IT</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Kirkland, 2024
                                    </div>

                                </div>
                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                            </div>


                            <div className='timeLine_data'>
                                <div></div>
                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                                <div>
                                    <h3 className='timeLine_title'>AAS, Computing & Software Development</h3>
                                    <span className='timeLine_subtitle'>Lake Washington IT</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Kirkland, 2022
                                    </div>
                                </div>
                            </div>


                            <div className='timeLine_data'>
                                <div>
                                    <h3 className='timeLine_title'>C++ / C# Web Developer Certification</h3>
                                    <span className='timeLine_subtitle'>Lake Washington IT</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Kirkland, 2022
                                    </div>
                                </div>
                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                            </div>


                            <div className='timeLine_data'>

                                <div></div>
                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                                <div>
                                    <h3 className='timeLine_title'>BFA, Art/Art Study</h3>
                                    <span className='timeLine_subtitle'>University of Washington</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Seattle, 2013
                                    </div>

                                </div>
                            </div>


                        </div>


                        <div className={toggleState === 2 ? "timeLine_content timeLine_content-active" : "timeLine_content"}>

                            <div className='timeLine_data'>

                                <div>
                                    <h3 className='timeLine_title'>Peraclete Technologies</h3>
                                    <span className='timeLine_subtitle'>Contract Specialist</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Renton, 2022-Present
                                    </div>
                                </div>

                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                            </div>

                            <div className='timeLine_data'>
                                <div></div>
                                <div>
                                    <span className='timeLine_rounder'></span>
                                    <span className='timeLine_line'></span>
                                </div>
                                <div>
                                    <h3 className='timeLine_title'>Boeing Company</h3>
                                    <span className='timeLine_subtitle'>Aircraft Technician</span>
                                    <div className='timeLine_calendar' >
                                        <CiCalendar i className='calendar-icon' /> Renton, 2020-2021
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default TimeLine