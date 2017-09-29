import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';

const DestinationsListByPoints = ({ region, children }) => (
  <div>
    <h3>{ region }</h3>
    <List type="grid">
      { children }
    </List>
  </div>
)

DestinationsListByPoints.propTypes = {
  region: PropTypes.string.isRequired
}

DestinationsListByPoints.defaultProps = {
  region:''
}

export default DestinationsListByPoints;
