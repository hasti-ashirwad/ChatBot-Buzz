import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { RiChatPollLine } from "react-icons/ri";
import "../style/Payment.css"; 

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-box">
        <div className="payment-icon">
          <MdOutlineEmail />
        </div>
        <h5>Payment reminders</h5>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
      <div className="payment-box">
        <div className="payment-icon">
          <RiChatPollLine />
        </div>
        <h5>Agent Chat Support</h5>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
      <div className="payment-box">
        <div className="payment-icon">
          <CiCloudSun />
        </div>
        <h5>Google Wallet</h5>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
      <div className="payment-box">
        <div className="payment-icon">
          <LuBarChart2 />
        </div>
        <h5>Apple Pay</h5>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
    </div>
  );
};

export default Payment;
