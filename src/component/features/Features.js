import React from 'react';
import "../style/Features.css";
import { MdOutlineEmail } from "react-icons/md";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png"
const Features = () => {
    return (
        <div className="features-container">
            <div className='features-title'>
                <h4>Features</h4>
                <h5>Analytics that feels like it’s from the future</h5>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className='features-main'>
                <div className="features-content">
                    <div>
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Achive 10x enagagement compared to SMS and Email campaigns</h5>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop..</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </div>
                    <div className="features-image">
                        <img src={feature1} alt="Feature 1" />
                    </div>
                </div>
                <div className="features-content">
                    <div className="features-image">
                        <img src={feature2} alt="Feature 2" />
                    </div>
                    <div>
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Automate your customer support
                        </h5>
                        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </div>
                </div>
                <div className="features-content">
                    <div>
                        <div className="icon"><MdOutlineEmail size={30} /></div>
                        <h5>Nudge Customers with right messgae to boost sales revenue
                        </h5>
                        <p>Our platform is designed with simplicity in mind, ensuring ease of use for all levels of users.</p>
                        <ul className="features-list">
                            <li>Leverage automation to move fast</li>
                            <li>Always give customers a human to chat to</li>
                            <li>Automate customer support and close leads faster</li>
                        </ul>
                    </div>
                    <div className="features-image">
                        <img src={feature3} alt="Feature 3" />
                    </div>
                </div>
            </div>
            <div className='features-title'>
                <h5>Cutting-edge features for advanced analytics</h5>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div className="features-image">
                    <img src={feature4} alt="Feature 3" height={1000} width={1000} />
                </div>
            </div>
        </div>
    );
};

export default Features;
