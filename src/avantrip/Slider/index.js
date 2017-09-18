import React from 'react';
import PropTypes from 'prop-types';

import SliderCarousel from 'react-slick';

const SampleArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <button
      className={className}
      style={{...style, background: 'green'}}
      onClick={onClick}
    >{props.children}</button>
  );
}

const settings = {
  'autoplay': true,
  'dots': true,
  'infinite': true,
  'slidesToShow': 1,
  'slidesToScroll': 1,
  'speed': 100,
  'dotsClass': 'dotsClass',
  'nextArrow': <SampleArrow> next </SampleArrow>,
  'prevArrow': <SampleArrow > prev </SampleArrow>,
  'className': 'className'
};

const Slider = ({children}) => (
  <SliderCarousel {...settings}>
    {children}
  </SliderCarousel>
)

export default Slider;
