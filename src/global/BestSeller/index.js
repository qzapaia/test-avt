import React from 'react';
import PropTypes from 'prop-types';

const BestSeller = ({text}) => (
  <div>{text}</div>
)

BestSeller.propTypes = {
  text: PropTypes.string.isRequired
}

BestSeller.defaultProps = {
  text:'Mas Vendidos'
}

export default BestSeller;
