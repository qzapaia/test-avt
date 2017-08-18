import React from 'react';
import PropTypes from 'prop-types';
import StyledRoque from './Roque.styled'

const Button = ({text='Button component LALALAL'}) => (
  <StyledRoque>{text}</StyledRoque>
)

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;
