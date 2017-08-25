import React from 'react';
import PropTypes from 'prop-types';

const Subscribe = ({text}) => (
  <div>{text}</div>
)

Subscribe.propTypes = {
  text: PropTypes.string.isRequired
}

Subscribe.defaultProps = {
  text:'Subscribe component'
}

export default Subscribe;
