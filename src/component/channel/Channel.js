import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../style/Channel.css";
import si1 from "../images/social icon1.png";
import si2 from "../images/social icon2.png";
import si3 from "../images/social icon3.png";
import si4 from "../images/social icon4.png";
import si5 from "../images/social icon5.png";
import si6 from "../images/social icon6.png";

const Channel = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); // Set triggerOnce to false

    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const iconAnimation = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, staggerChildren: 0.2 } }
    };

    const iconChildAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='channel-title' ref={ref}>
            <motion.div 
                initial="hidden" 
                animate={inView ? "visible" : "hidden"} 
                variants={textAnimation}
                className='channel-header'
            >
                <h4>Omnichannel Support</h4>
                <h5>Analytics that feels like it’s from the future</h5>
                <p>Be everywhere and support your users across the channels with a single chatbot</p>
            </motion.div>
            <motion.div 
                initial="hidden" 
                animate={inView ? "visible" : "hidden"} 
                variants={iconAnimation} 
                className='social-icons'
            >
                {[si1, si2, si3, si4, si5, si6].map((src, index) => (
                    <motion.img 
                        key={index}
                        src={src} 
                        alt={`Social Icon ${index + 1}`} 
                        variants={iconChildAnimation}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Channel;
