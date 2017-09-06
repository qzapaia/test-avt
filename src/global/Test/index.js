import React from 'react';
import PropTypes from 'prop-types';

const Test = ({text, onClick}) => (
  <div onClick={onClick}>
    Test component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

Test.propTypes = {
  text: PropTypes.node.isRequired
}

Test.defaultProps = {
  text:'no value yet :('
}

export default Test;