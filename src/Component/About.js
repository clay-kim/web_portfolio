import './About.css'
import Carousel from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function About() {

    return (
        <section className='about section' id='about'>

            <div className='about_container'>
                <div className='about_box1'>

                    <div className='content_box'>
                        <div data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
              
                        >
                        <h4>a bit more about me</h4>
                        </div>

                        <p>
                            After graduating from University of Washington with a degree in Fine arts/Art history, I've remained devoted to painting ever since.<br />
                            Art has become an integral part of my life, influencing my creativity and perspective.
                            Just as in painting, coding has become a fascinating new hue in my life.<br />
                            My goal is to blend these newfound skills and passions, using them to thrive and innovate in my career as a software developer.
                        </p>
                    </div>

                </div>

                <div className='about_box2'>
                    <div className='about_clay'>
                        <div className='quote_box'>
                            <ul className="c-rainbow">
                                <li className="c-rainbow__layer c-rainbow__layer--white">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--orange">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--red">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--violet">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--blue">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--green">"Never met a color I didn't Like"</li>
                                <li className="c-rainbow__layer c-rainbow__layer--yellow">"Never met a color I didn't Like"</li>
                            </ul>
                        </div>

                    </div>
                    <div className='carousel_container'>
                        <Carousel />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About

