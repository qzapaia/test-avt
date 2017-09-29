import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import {SliderButton, IconContainer, SliderContainer} from './styled';

import { assign, pick } from "lodash";

import SliderCarousel from 'react-slick';

const SampleArrow = props => {
  const {className, style, onClick} = props
  return (
    <SliderButton
      className={className}
      onClick={onClick}>
      {props.children}
    </SliderButton>
  );
}

const initialSettings = {
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

const Slider = ({ settings, children }) => {
  settings = pick(settings, [
    "autoplay",
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
    <SliderContainer>
      <SliderCarousel {...assign(initialSettings, settings)}>
        {children}
      </SliderCarousel>
    </SliderContainer>
  );
}

export default Slider;
