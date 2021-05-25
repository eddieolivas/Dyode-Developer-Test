import React from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';



const Slider = ({ children, title, caption, className })=>{

  let settings = {
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    dots: true,
    arrows: false,
  }

  return(
    <div className={`sliderWrap ${className}`}>
      <SlickSlider {...settings}>
        {children}
      </SlickSlider>
    </div>
  )
}


Slider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Slider