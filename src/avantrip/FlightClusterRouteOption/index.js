import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../Text';
import InputRadio from '../InputRadio';

const formatMinutes = minutes => moment()
                                .startOf('day')
                                .add(minutes, 'minutes')
                                .format('hh[hs] mm[m] ')

const FlightClusterRouteOption = ({text, onClick}) => (
  <div onClick={onClick}>
    <InputRadio></InputRadio>
    FlightClusterRouteOption component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>

    <p>
      <Text>Los horarios están expresados en la hora local de cada ciudad</Text>
    </p>
  </div>
)

FlightClusterRouteOption.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.object.isRequired,
  isExpanded:PropTypes.bool
}

FlightClusterRouteOption.defaultProps = {
  isExpanded: false
}

export default FlightClusterRouteOption;
