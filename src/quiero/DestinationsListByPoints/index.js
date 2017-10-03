import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import DestinationsListByPointsItem from './DestinationsListByPointsItem.js';

const DestinationsListByPoints = ({ region, destinations }) => {

  const destinationsLength = destinations.length;
  const children = [];
  for (var i = 0; i < destinationsLength; i++) {
    children.push(
      <DestinationsListByPointsItem
        id = {i}
        destinoNombre = { destinations[i].destinoNombre }
        rango = { destinations[i].rango }
        rangoBusiness = { destinations[i].rangoBusiness || undefined }
      />);
  }

  //Si destinations contiene datos de business muestro una columna mas
  const BusinessHeader = destinations.some((data) => (!isNaN(data.rangoBusiness))) && <span>Business</span>;

  return(
    <div>
      <h3>{ region }</h3>
      <div>
        <span>Destino</span>
        <span>Turista</span>
        { BusinessHeader }
      </div>
      <List type="list">
        { children }
      </List>
    </div>);
}

DestinationsListByPoints.propTypes = {
  region: PropTypes.string.isRequired,
  destinations: PropTypes.array.isRequired
}

DestinationsListByPoints.defaultProps = {
  region:'',
  destinations: []
}

export default DestinationsListByPoints;
