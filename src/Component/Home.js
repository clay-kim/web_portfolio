import React from 'react'
import './Home.css';
import { IoDownloadOutline } from "react-icons/io5";
import Social from './Social';
import resume from '../Assets/resume.pdf';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
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
                            <span class='highlight'>Passionate</span> about <span class='highlight'>web/</span><span class='highlight'>app development</span>,
                            as well as <span class='highlight'>UX/UI</span> and interactive design.<br></br>
                            I'm all about creating software that's both <span class='highlight'>user-friendly</span> and <span class='highlight'>visually appealing</span>.
                            <br></br>Out side of coding, I'm always up for some artistic activities like <span class='highlight'>painting</span> or
                            <span class='highlight'> photography</span> to unwind and  also for getting
                            <span class='highlight'> inspiration</span>.
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