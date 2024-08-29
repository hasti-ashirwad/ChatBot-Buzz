import React from 'react';
import "../style/Channel.css";
import si1 from "../images/social icon1.png";
import si2 from "../images/social icon2.png";
import si3 from "../images/social icon3.png";
import si4 from "../images/social icon4.png";
import si5 from "../images/social icon5.png";
import si6 from "../images/social icon6.png";

const Channel = () => {
    return (
        <div className='channel-title'>
            <h4>Omnichannel Support</h4>
            <h5>Analytics that feels like it’s from the future</h5>
            <p>Be everywhere and support your users across the channels with a single chatbot</p>
            <div className='social-icons'>
                <img src={si1} alt="Social Icon 1" />
                <img src={si2} alt="Social Icon 2" />
                <img src={si3} alt="Social Icon 3" />
                <img src={si4} alt="Social Icon 4" />
                <img src={si5} alt="Social Icon 5" />
                <img src={si6} alt="Social Icon 6" />
            </div>
        </div>
    );
};

export default Channel;
