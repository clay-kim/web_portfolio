import React from 'react'
import './Home.css';
import { IoDownloadOutline } from "react-icons/io5";
import Social from './Social';
import resume from '../Assets/resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();



function Home() {
    return (
        <section className='home section' id='home'>
            <div className="home_container">
                <div className="home_content">
                    <div className="home_text">
                        <div data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                
                        > <h1 className='home_title'>Clay Kim</h1></div>

                        <div className='subtitle-container'>
                        <p className='home_subtitle'>Web Developer</p> <p className='home_subtitle2'>(Introductory Position)</p>
                        </div>
                       
                        <div className='home_info'>
                            <span class='highlight'>Hello, 👋</span><br></br>
                            I recently graduated with a degree in <span class='highlight'>Information Technology</span>.<br></br>
                            Actively seeking a <span class='highlight'>full-stack</span> developer role.<br></br>
                            I'm focused on delivering end-to-end <span class='highlight'>web</span> and <span class='highlight'>mobile</span> solutions and excited to learn and <span class='highlight'>grow</span> with a dynamic team and company.
                    
                        </div>
                        <div className="button_container">
                            <a href={resume} className='sendButton'>Resume<IoDownloadOutline className='icon' /></a>

                        </div>
                    </div>

                    <div className='right_container'>
                        <Social className="home_social" />
                        <img alt="" className="home_img" />
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Home