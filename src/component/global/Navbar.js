import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';
import logo from "../images/logo.png";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (event, target) => {
        event.preventDefault();
        
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                scrollToTarget(target);
            }, 100); 
        } else {
            scrollToTarget(target);
        }
    };

    const scrollToTarget = (target) => {
        const element = document.getElementById(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 150, 
                behavior: 'smooth'
            });
        }
    };

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
                    <a
                        href="/features"
                        onClick={(e) => handleScroll(e, 'features')}
                        className={location.pathname === '/' && location.hash === '#features' ? 'active' : ''}
                    >
                        Features
                    </a>
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
                    BOOK LIVE DEMO
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
