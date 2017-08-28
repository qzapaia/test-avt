import React from 'react';
import PropTypes from 'prop-types';

const MainSlider = ({text}) => (
  <div>{text}</div>
)

MainSlider.propTypes = {
  text: PropTypes.string.isRequired
}

MainSlider.defaultProps = {
  text:'MainSlider component'
}

export default MainSlider;
