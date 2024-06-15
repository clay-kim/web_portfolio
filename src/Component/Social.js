import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Social() {
    return (
        <div className='home_social'>
            <a
                href='https://www.linkedin.com/in/claythedreamer/'
                className='home_social_icon'
                target="_blank"
            >
            <BsLinkedin />
            </a>

            <a
                href='https://www.instagram.com/claythepainter/'
                className='home_social_icon'
                target="_blank"
            >
            <BsInstagram />
            </a>

            <a
                href='https://github.com/clay-kim?tab=repositories'
                className='home_social_icon'
                target="_blank"
            >
            <BsGithub />
            </a>
        </div>
    )
}

export default Social