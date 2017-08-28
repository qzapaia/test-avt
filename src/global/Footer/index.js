import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({text}) => (
  <div>{text}</div>
)

Footer.propTypes = {
  text: PropTypes.string.isRequired
}

Footer.defaultProps = {
  text:'Footer component'
}

export default Footer;
