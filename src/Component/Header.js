import React, { useState } from 'react'
import './Header.css';
import { IoCodeSlash } from "react-icons/io5";
import { Link } from 'react-scroll';
import { Squeeze as Hamburger } from 'hamburger-react'


function Header() {

    const [isOpen, setOpen] = useState(false);


    return (


        <header className='header'>
            <div className='logo'>
                <a href='/'><IoCodeSlash className='nav_logo' /></a>
            </div>
            <nav className={isOpen ? 'nav_bar_mobile' : 'nav_bar'}
                onClick={() => setOpen(false)}>
                <Link to='home' smooth={true} duration={200} offset={-100} className='nav_link' onClick={() => setOpen(false)}>Home</Link>
                <Link to='about' smooth={true} duration={200} className='nav_link' onClick={() => setOpen(false)}>About</Link>
                <Link to='timeLine' smooth={true} duration={500} className='nav_link' onClick={() => setOpen(false)}>Experience</Link>
                <Link to='projects' smooth={true} duration={500} className='nav_link' onClick={() => setOpen(false)}>Projects</Link>
                <Link to='contact' smooth={true} duration={500} className='nav_link' onClick={() => setOpen(false)}>Contact</Link>
            </nav>

            <div className="hamburger-icon">
                <Hamburger
                    hideOutline={false}
                    color="grey"
                    toggled={isOpen} toggle={setOpen}
                />
            </div>


        </header>


    )
}

export default Header