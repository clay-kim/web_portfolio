import React from 'react'
import './Home.css';
import { LuSend } from "react-icons/lu";
import Social from './Social';



function Home() {
    return (
        <section className='home section' id='home'>
            <div className="home_container">
                <div className="home_content">
                    <div className="home_text">
                        <h1 className='home_title'>Clay Kim</h1>
                        <p className='home_subtitle'>Visual Designer & Web developer</p>
                        <div className='home_info'>
                            <span class='highlight'>Hello, there!</span><br></br>
                            I'm a recent graduate with a degree in <span class='highlight'>computer science</span>.<br></br>
                            <span class='highlight'>Passionate</span> about <span class='highlight'>web/</span><span class='highlight'>app development</span>,
                            as well as <span class='highlight'>UX/UI</span> and interactive design.<br></br>
                            I'm all about creating software that's both <span class='highlight'>user-friendly</span> and <span class='highlight'>visually appealing</span>.
                            <br></br>Out side of coding, I'm always up for some artistic activities like <span class='highlight'>painting</span> or 
                            <span class='highlight'> photography</span> to unwind and  also for getting
                            <span class='highlight'> inspiration</span>.
                        </div>
                        <div className="button_container">
                            <button className='sendButton'>Send Email <LuSend className='icon' /></button>
                        </div>
                    </div>

                    <div className='right_container'>
                        <Social className="home_social" />
                        <img alt="Clay" className="home_img" />
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Home