import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../style/Hero.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import slick1 from "../images/1.png";
import slick2 from "../images/2.png";
import slick3 from "../images/3.png";
import slick4 from "../images/4.png";
import slick5 from "../images/5.png";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to trigger every time the section enters the viewport
    threshold: 0.3, // Adjust this value to control when the animation triggers (0 = as soon as any part is visible, 1 = only when fully visible)
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <motion.div
      className="hero-container"
      ref={ref} // Attach the ref to the container you want to observe
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Animate based on visibility
      transition={{ duration: 1.5 }}
    >
      <motion.h3
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Create powerful conversations with WhatsApp API solution - Page Header
      </motion.h3>
      <motion.h5
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.
      </motion.h5>
      <motion.button
        className="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        LEARN MORE
      </motion.button>
      <motion.div
        className='slick'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <Slider {...settings}>
          <div>
            <motion.img src={slick1} alt="Slide 1" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick2} alt="Slide 2" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick3} alt="Slide 3" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick4} alt="Slide 4" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick5} alt="Slide 5" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick2} alt="Slide 6" whileHover={{ scale: 1.05 }} />
          </div>
          <div>
            <motion.img src={slick1} alt="Slide 7" whileHover={{ scale: 1.05 }} />
          </div>
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
