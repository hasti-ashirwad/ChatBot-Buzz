import React from 'react';
import "../style/Footer.css";
import logo from "../images/logo.png";
import { CiPhone, CiMail } from "react-icons/ci";
import { IoMdPrint } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='main-footer'>
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <p className="footer-text">
                        We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <span className='read'>Read More</span>
                    </p>
                    <div className="footer-icons">
                        <div className="footer-icon">
                            <CiPhone size={20} />
                            <div className='details'>
                                <p>Tel</p>
                                <p className='orange'>310-437-2766</p>
                            </div>
                        </div>
                        <div className="footer-icon">
                            <CiMail size={20} />
                            <div className='details'>
                                <p>Email</p>
                                <p className='orange'>example@example.com</p>
                            </div>
                        </div>
                        <div className="footer-icon">
                            <IoMdPrint size={20} />
                            <div className='details'>
                                <p>Fax</p>
                                <p className='orange'>310-437-2766</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-icon-footer">
                    <div className="social-footer ">
                        <FaFacebook />
                    </div>
                    <div className="social-footer ">
                        <FaTwitter />
                    </div>
                    <div className="social-footer ">
                        <FaLinkedin />
                    </div>
                    <div className="social-footer ">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className='bottom-part'>
                <ul className="footer-li">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Contact Us</li>

                </ul>
                <div className='footer-copyright'>
                    © 2000-2021, All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
