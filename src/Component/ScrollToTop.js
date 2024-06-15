import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import React from 'react';
import { useState, useEffect } from 'react';
import "./ScrollToTop.css";

function ScrollToTop() {

    

    const [scrollUPButton, setScrollUpButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 900) {
                setScrollUpButton(true);
            }
            else{
                setScrollUpButton(false);
            }
        })
    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div class="arrow">
        
            {scrollUPButton && (
                <MdKeyboardDoubleArrowUp className="arrowBar" style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    fontSize: "2.5rem",
                    color: "rgba(29, 29, 29, 0.8)",
                    }}
                    onClick={scrollUp}
                >
                </MdKeyboardDoubleArrowUp>
            )}
        </div>
    )
}

export default ScrollToTop

