import React from 'react';
import PropTypes from 'prop-types';
import Roque from './Roque.styled';

const Button = ({text='Button component'}) => (
  <Roque>{text}</Roque>
)

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;
