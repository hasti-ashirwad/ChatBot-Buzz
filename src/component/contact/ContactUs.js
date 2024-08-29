import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../style/ContactUs.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Set to false to trigger animation every time it enters the viewport
        threshold: 0.3, // Adjust the value to control when the animation triggers
    });

    return (
        <motion.div
            className="contact-us"
            id='contact'
            ref={ref} // Attach the ref to the container you want to observe
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="contact-container">
                <div className="contact-header">
                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="contact-subtitle"
                    >
                        Get in touch with us. We're here to assist you.
                    </motion.h4>
                </div>
                <div className="social-icon-container">
                    <motion.div
                        className="social-icon"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <FaFacebook />
                    </motion.div>
                    <motion.div
                        className="social-icon"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <FaTwitter />
                    </motion.div>
                    <motion.div
                        className="social-icon"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <FaLinkedin />
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
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
                        <button type="submit" className="submit-button">
                            Leave us a Message<FaArrowRightLong />
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ContactUs;
