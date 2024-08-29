import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/GoToTop.css";
import { FaArrowUpLong } from "react-icons/fa6";

export default function GoToTop() {
    const [showButton, setShowButton] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const onTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    };

    const handleGoToTopClick = () => {
        onTop();
        navigate("/"); // Redirect to homepage
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) { // Show button after hero section
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    return (
        showButton && (
            <button className="go-to-top-button" onClick={handleGoToTopClick}>
                <FaArrowUpLong  className="go-to-top"/>
            </button>
        )
    );
}
