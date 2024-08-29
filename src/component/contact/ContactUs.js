import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../style/ContactUs.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="contact-us" id='contact'>
            <div className="contact-container">
                <div className="contact-header">
                    <h5 className="contact-title">Get Started</h5>
                    <h4 className="contact-subtitle">Get in touch with us. We're here to assist you.</h4>
                </div>
                <div className="social-icon-container">
                    <div className="social-icon">
                        <FaFacebook />
                    </div>
                    <div className="social-icon">
                        <FaTwitter />
                    </div>
                    <div className="social-icon">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="tel" placeholder="Phone Number" className="form-input" />
                    </div>
                    <div className="form-row">
                        <textarea placeholder="Your Message" className="form-input message-input"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="submit-button">Leave us a Message<FaArrowRightLong/></button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
