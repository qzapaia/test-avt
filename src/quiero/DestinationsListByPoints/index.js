import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Item from './Item.js';

const DestinationsListByPoints = ({ region, destinations }) => {

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
        {
          destinations.map((d) =>
            <Item
              key = { d.destinoNombre }
              name = { d.destinoNombre }
              defaultPoints = { d.rango }
              businessPoints = { d.rangoBusiness }
            />
          )
        }
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
