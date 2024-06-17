import React, { useState } from 'react'
import "./ContactForm.css";
import { useRef } from 'react';
import pic from '../Assets/brain.jpg';
import emailjs from '@emailjs/browser';
import Social from './Social';
import Canvas from '../Canvas/Canvas';



function ContactForm() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleName = (e) => {
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k4nvuxs', 'template_6kk4wze', form.current, 'NNsAiQ8PXH7vXzF9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };



    return (
        <section className='home section' id='home'>


            <div className="contactForm_container">
                <div className="contactForm_content">
                    <div className="img_container">
          
                        <img src={pic} alt="creation_of_Adam" />
                    </div>

                    <div className='social-container'>
                        <Social className="home_social" />
                    </div>
                    <div className='form-group-container'>

                        <form className='contact_form' ref={form} onSubmit={sendEmail}>
                            <h2>
                                Get in touch
                            </h2>
                            <div className="form-group_container">
                                <div className="form-group">
                                    <label htmlFor='name'>
                                        <textarea
                                            placeholder='Your name'
                                            type="text"
                                            name="user_name"
                                            message="name"
                                            value={userName}
                                            onChange={handleName}
                                        />
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label htmlFor='email'>
                                        <textarea
                                            placeholder='Your email address' required
                                            type="text"
                                            name="user_email"
                                            message="email"
                                            value={userEmail}
                                            onChange={handleEmail}
                                        />
                                    </label>
                                </div>

                                <div className="form-group-msg">
                                    <label htmlFor='message'>
                                        <textarea
                                            className='textarea_message'
                                            placeholder='Message'
                                            type="text"
                                            name="message"
                                            message="message"
                                            value={userMessage}
                                            onChange={handleMessage}
                                        />
                                    </label>
                                </div>

                            </div>
                            <div className="button_container">
                                <button onClick={() => userEmail ? alert("Message sent!") : alert("Please fill out the form below.")} type="submit" className="submit-button">Send</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default ContactForm