import React from 'react';
import PropTypes from 'prop-types';

const DestinationPointsByDate = ({text, onClick}) => (
  <div onClick={onClick}>
    DestinationPointsByDate component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

DestinationPointsByDate.propTypes = {
  text: PropTypes.node.isRequired
}

DestinationPointsByDate.defaultProps = {
  text:'no value yet :('
}

export default DestinationPointsByDate;
