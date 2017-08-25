import React from 'react';
import PropTypes from 'prop-types';

const BestSeller = ({text}) => (
  <div>{text}</div>
)

BestSeller.propTypes = {
  text: PropTypes.string.isRequired
}

BestSeller.defaultProps = {
  text:'BestSeller component'
}

export default BestSeller;
