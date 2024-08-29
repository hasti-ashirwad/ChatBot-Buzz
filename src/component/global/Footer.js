import React from 'react';
import "../style/Footer.css"; 
import logo from "../images/logo.png";
import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import { IoMdPrint } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
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
                        <CiLocationOn size={20} />
                        <div className='details'>
                            <p>Location</p>
                            <p className='orange'>123 Main St, City, Country</p>
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
                <div className='main-link'>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <ul className="link">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>

                </div>
            </div>
            <hr className="footer-divider" />
            <div className='bottom-part'>
                <ul className="footer-li">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                    <li>Terms of Use</li>
                </ul>
                <div className='footer-copyright'>
                    © 2000-2021, All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;