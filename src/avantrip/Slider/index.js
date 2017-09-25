import React from "react";
import PropTypes from "prop-types";

import { assign, pick } from "lodash";

import SliderCarousel from "react-slick";

const SampleArrow = props => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, background: "green" }}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

const initialSettings = {
  autoplay: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 100,
  dotsClass: "dotsClass",
  nextArrow: <SampleArrow> next </SampleArrow>,
  prevArrow: <SampleArrow> prev </SampleArrow>,
  className: "className"
};

const Slider = ({ settings, children }) => {
  settings = pick(settings, [
    ("autoplay": false),
    "dots",
    "infinite",
    "slidesToShow",
    "slidesToScroll",
    "speed",
    "dotsClass",
    "nextArrow",
    "prevArrow",
    "className"
  ]);

  return (
    <SliderCarousel {...assign(initialSettings, settings)}>
      {children}
    </SliderCarousel>
  );
};

export default Slider;
