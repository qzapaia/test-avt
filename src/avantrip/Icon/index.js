import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size,
  color,
  id,
}) => (
  <span> Icon {id} </span>
)

Icon.propTypes = {
  size:PropTypes.oneOf(['m']),
  color:PropTypes.oneOf(['black']),
  id:PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size:'m',
  color:'black',
}

export default Icon;
