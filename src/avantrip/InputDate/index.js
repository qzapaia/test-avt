import React from 'react';
import PropTypes from 'prop-types';

const InputDate = ({text, onClick}) => (
  <div onClick={onClick}>
    InputDate component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

InputDate.propTypes = {
  text: PropTypes.node.isRequired
}

InputDate.defaultProps = {
  text:'no value yet :('
}

export default InputDate;
