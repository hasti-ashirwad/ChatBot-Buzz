import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';
import logo from "../images/logo.png";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div><img src={logo} className='navbar-logo' alt='logo' /></div>
            <ul className="navbar-links">
                <li>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/services"
                        className={location.pathname === '/services' ? 'active' : ''}
                    >
                        Features
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={location.pathname === '/contact' ? 'active' : ''}
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
                <div className="button">
                    BOOK live DEMO
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;
