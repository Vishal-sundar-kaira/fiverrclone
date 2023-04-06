import React from "react";
import "./Slider.scss";
import Slide from "infinite-react-carousel";

const Slider = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slide slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;