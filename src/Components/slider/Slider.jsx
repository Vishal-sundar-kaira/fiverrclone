import React from "react";
import "./Slider.scss";
import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Slider = ({ children, slidesToShow, arrowsScroll }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
    prevArrow: <div className="slick-arrow-custom ">Previous</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>
  };
  
  return (
    <>
    <div className="slide">
      <div className="container">
        <Slide {...settings}>
          {children}
        </Slide>
      </div>
    </div>
    </>
  );
};

export default Slider;