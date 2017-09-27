import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import {SliderButton, IconContainer, SliderContainer} from './container.styled';

import SliderCarousel from 'react-slick';

const SampleArrow = (props) => {
  const {className, style, onClick} = props
  return (
    <SliderButton
      className={className}
      onClick={onClick}
    >{props.children}
    </SliderButton>
  );
}

const settings = {
  'autoplay': true,
  'dots': true,
  'infinite': true,
  'slidesToShow': 1,
  'slidesToScroll': 1,
  'speed': 500,
  'dotsClass': 'sliderDots',
  'nextArrow': <SampleArrow> next </SampleArrow>,
  'prevArrow': <SampleArrow> prev </SampleArrow>,
  'className': 'className',
  'autoplaySpeed': 6000
};

const Slider = ({children}) => (
  <SliderContainer>
    <SliderCarousel {...settings}>
      {children}
    </SliderCarousel>
  </SliderContainer>
)

export default Slider;
