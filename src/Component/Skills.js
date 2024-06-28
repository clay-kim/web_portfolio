import React from 'react'
import './Skills.css'


// Reusable Button Component
function CustomButton({ text }) {
    const characters = text.split('');
    return (
        <button className='skillList'>
            <span className="span-mother">
                {characters.map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </span>
            <span className="span-mother2">
                {characters.map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </span>
        </button>
    );
}


function Skills() {

    return (
        <div className="skills_container">
                <p>Things I mostly familiar with</p>

            <div className="program_container">
                <div className="item_container">
                    <CustomButton text="HTML" />
                    <CustomButton text="JavaScript" />
                    <CustomButton text="CSS" />
                    <CustomButton text="Java" />
                    <CustomButton text="C#" />
                    <CustomButton text="React JS" />
                    <CustomButton text="MySQL" />
                    <CustomButton text="jQuery" />
                    <CustomButton text="AWS" />
                    <CustomButton text="Cloud" />
                    <CustomButton text="Photoshop" />
                    <CustomButton text="illustrator" />
                    <CustomButton text="Figma" />
                    <CustomButton text="Agile" />
                </div>
            </div>

        </div>

    )
}


export default Skills