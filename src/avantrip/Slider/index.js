import React from 'react';
import PropTypes from 'prop-types';

import SliderCarousel from 'react-slick';

const settings = {
    'autoplay': true,
    'dots': true,
    'infinite': true,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'speed': 100,
    'dotsClass': 'dotsClass',
    'nextArrow': <button>nextArrow</button>,
    'prevArrow': <button>prevArrow</button>,
    'className': 'className'
};

const Slider = ({children}) => (
    <SliderCarousel {...settings}>
        {children.map(c => c)}
    </SliderCarousel>
)

export default Slider;
