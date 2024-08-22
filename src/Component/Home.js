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

                        <p className='home_subtitle'>Visual Designer & Web developer</p>
                        <div className='home_info'>
                            <span class='highlight'>Hello, 👋</span><br></br>
                            I recently graduated with a degree in <span class='highlight'>Information Technology</span>.<br></br>
                            Currently seeking a role as a <span class='highlight'>web</span> or <span class='highlight'>mobile developer</span>. 
                            Passionate about creating <span class='highlight'>user-friendly</span> and visually impactful <span class='highlight'>web applications</span>.<br></br>
                            Skilled in <span class='highlight'>Agile</span> methodology, able to excel in <span class='highlight'>fast-paced</span> environments with strong <span class='highlight'>teamwork</span> and flexible yet precise work..
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