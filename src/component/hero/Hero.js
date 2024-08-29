import React from 'react';
import Slider from 'react-slick';
import '../style/Hero.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import slick1 from "../images/1.png"
import slick2 from "../images/2.png"
import slick3 from "../images/3.png"
import slick4 from "../images/4.png"
import slick5 from "../images/5.png"

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="hero-container">
      <h3>Create powerful conversations with WhatsApp API solution - Page Header</h3>
      <h5>Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.</h5>
      <button className="button">LEARN MORE</button>
      <div className='slick'>
        <Slider {...settings}>
          <div>
            <img src={slick1} alt="Slide 1" />
          </div>
          <div>
            <img src={slick2} alt="Slide 2" />
          </div>
          <div>
            <img src={slick3} alt="Slide 3" />
          </div>
          <div>
            <img src={slick4} alt="Slide 1" />
          </div>
          <div>
            <img src={slick5} alt="Slide 2" />
          </div>
          <div>
            <img src={slick2} alt="Slide 3" />
          </div>
          <div>
            <img src={slick1} alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
