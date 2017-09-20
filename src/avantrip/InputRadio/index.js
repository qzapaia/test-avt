import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({text, onClick}) => (
  <div onClick={onClick}>
    InputRadio component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

InputRadio.propTypes = {
  text: PropTypes.node.isRequired
}

InputRadio.defaultProps = {
  text:'no value yet :('
}

export default InputRadio;
