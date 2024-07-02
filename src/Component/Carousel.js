
import pic6 from '../Assets/arts/art3.jpeg'
import pic8 from '../Assets/arts/art4.jpg'
import pic9 from '../Assets/arts/art6.jpg'
import pic4 from '../Assets/arts/laundry.png'
import pic3 from '../Assets/arts/pnw.jpg';
import pic5 from '../Assets/arts/rice-planting.jpg';
import pic7 from '../Assets/arts/rose-garden.jpg';
import pic2 from '../Assets/arts/solitude.jpg'
import pic1 from '../Assets/arts/sunbath.jpg';
import pic10 from '../Assets/arts/wave.jpg';

import "./Carousel.css"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        initialSlide: 0,
        pauseOnHover: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className="carousel_img" src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default Carousel;


