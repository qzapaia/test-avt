import React from 'react';
import PropTypes from 'prop-types';

const SpecialOffer = ({text}) => (
  <div>{text}</div>
)

SpecialOffer.propTypes = {
  text: PropTypes.string.isRequired
}

SpecialOffer.defaultProps = {
  text:'SpecialOffer component'
}

export default SpecialOffer;
