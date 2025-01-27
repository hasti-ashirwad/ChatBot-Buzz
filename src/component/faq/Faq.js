import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { LuBarChart2 } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { RiChatPollLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../style/Payment.css"; 

const Payment = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Set to false to animate every time it scrolls into view
    threshold: 0.2,      // Trigger the animation when 20% of the section is visible
  });

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10 },
    tap: { scale: 0.9 },
  };

  const textVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      ref={ref}
      className="payment-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, staggerChildren: 0.3 }}
    >
      <motion.div className="payment-box" variants={boxVariants}>
        <motion.div className="payment-icon" variants={iconVariants} whileHover="hover" whileTap="tap">
          <MdOutlineEmail />
        </motion.div>
        <motion.h5 variants={textVariants} whileHover="hover">Payment reminders</motion.h5>
        <p>Automate timely, personalized payment reminders via WhatsApp, reducing late payments and enhancing customer satisfaction with seamless, real-time communication.</p>
      </motion.div>
      
      <motion.div className="payment-box" variants={boxVariants}>
        <motion.div className="payment-icon" variants={iconVariants} whileHover="hover" whileTap="tap">
          <RiChatPollLine />
        </motion.div>
        <motion.h5 variants={textVariants} whileHover="hover">Agent Chat Support</motion.h5>
        <p>Provide real-time customer support via WhatsApp with live agents, ensuring quick responses and personalized assistance to enhance customer satisfaction.</p>
      </motion.div>
      
      <motion.div className="payment-box" variants={boxVariants}>
        <motion.div className="payment-icon" variants={iconVariants} whileHover="hover" whileTap="tap">
          <CiCloudSun />
        </motion.div>
        <motion.h5 variants={textVariants} whileHover="hover">Google Wallet</motion.h5>
        <p>An AI-powered FAQ Bot that provides instant, accurate answers to customer queries, improving support efficiency and user experience.</p>
      </motion.div>
      
      <motion.div className="payment-box" variants={boxVariants}>
        <motion.div className="payment-icon" variants={iconVariants} whileHover="hover" whileTap="tap">
          <LuBarChart2 />
        </motion.div>
        <motion.h5 variants={textVariants} whileHover="hover">Apple Pay</motion.h5>
        <p>Send personalized messages to multiple contacts simultaneously using WhatsApp Broadcast, enhancing communication and engagement with your audience.</p>
      </motion.div>
    </motion.div>
  );
};

export default Payment;
