import React from 'react';
import PropTypes from 'prop-types';

const Select = ({text, onClick}) => (
  <div onClick={onClick}>
    Select component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

Select.propTypes = {
  text: PropTypes.node.isRequired
}

Select.defaultProps = {
  text:'no value yet :('
}

export default Select;
