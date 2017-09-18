import React from 'react';
import PropTypes from 'prop-types';

const FlightClusterRouteOption = ({text, onClick}) => (
  <div onClick={onClick}>
    FlightClusterRouteOption component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

FlightClusterRouteOption.propTypes = {
  text: PropTypes.node.isRequired
}

FlightClusterRouteOption.defaultProps = {
  text:'no value yet :('
}

export default FlightClusterRouteOption;
