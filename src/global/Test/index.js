import React from 'react';
import PropTypes from 'prop-types';

const Test = ({text, onClick}) => (
  <div onClick={onClick}>{text}</div>
)

Test.propTypes = {
  text: PropTypes.string.isRequired
}

Test.defaultProps = {
  text:'Test component'
}

export default Test;
