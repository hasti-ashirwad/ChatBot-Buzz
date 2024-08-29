import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../style/Features.css";
import { MdOutlineEmail } from "react-icons/md";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";

const Features = () => {
    // Create Intersection Observer hooks for each section
    const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });

    // Define animation variants for content and images
    const imageAnimation = {
        hidden: { opacity: 0, x: 300 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
    };

    const contentAnimation = {
        hidden: { opacity: 0, x: -300 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
    };

    return (
        <div className="features-container" id='features'>
            <div className='features-title'>
                <h4>Features</h4>
                <h5>Analytics that feels like it’s from the future</h5>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className='features-main'>
                <div className="features-content" ref={ref1}>
                    <motion.div 
                        initial="hidden" 
                        animate={inView1 ? "visible" : "hidden"} 
                        variants={contentAnimation}
                    >
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Achieve 10x engagement compared to SMS and Email campaigns</h5>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial="hidden" 
                        animate={inView1 ? "visible" : "hidden"} 
                        variants={imageAnimation} 
                        className="features-image"
                    >
                        <img src={feature1} alt="Feature 1" />
                    </motion.div>
                </div>

                <div className="features-content" ref={ref2}>
                    <motion.div 
                        initial="hidden" 
                        animate={inView2 ? "visible" : "hidden"} 
                        variants={imageAnimation} 
                        className="features-image"
                    >
                        <img src={feature2} alt="Feature 2" />
                    </motion.div>
                    <motion.div 
                        initial="hidden" 
                        animate={inView2 ? "visible" : "hidden"} 
                        variants={contentAnimation}
                    >
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Automate your customer support</h5>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="features-content" ref={ref3}>
                    <motion.div 
                        initial="hidden" 
                        animate={inView3 ? "visible" : "hidden"} 
                        variants={contentAnimation}
                    >
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Nudge Customers with the right message to boost sales revenue</h5>
                        <p>Our platform is designed with simplicity in mind, ensuring ease of use for all levels of users.</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial="hidden" 
                        animate={inView3 ? "visible" : "hidden"} 
                        variants={imageAnimation} 
                        className="features-image"
                    >
                        <img src={feature3} alt="Feature 3" />
                    </motion.div>
                </div>
            </div>
            <div className='features-title' ref={ref4}>
                <h5>Cutting-edge features for advanced analytics</h5>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <motion.div 
                    initial="hidden" 
                    animate={inView4 ? "visible" : "hidden"} 
                    variants={imageAnimation} 
                    className="features-image"
                >
                    <img src={feature4} alt="Feature 4" height={1000} width={1000} />
                </motion.div>
            </div>
        </div>
    );
};

export default Features;
