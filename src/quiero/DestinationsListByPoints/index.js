import React from 'react';
import PropTypes from 'prop-types';
import List from '../List';
import Text from '../Text';
import Item from './Item.js';

import {StyledDestinationsListByPoints, HeaderList} from './styled';

const DestinationsListByPoints = ({ region, destinations }) => {

  //Si destinations contiene datos de business muestro una columna mas
  const BusinessHeader = destinations.some((data) => (!isNaN(data.rangoBusiness))) && <Text type="s" color="blue">Business</Text>;

  return(
    <div>
      <StyledDestinationsListByPoints>
        <Text tag="h2" type="m" color="brand">{ region }</Text>
        <div>
          <HeaderList>
            <Text type="s" color="darkgray">Destino</Text>
            <Text type="s" color="secondary">Turista</Text>
            { BusinessHeader }
          </HeaderList>
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
        </div>
      </StyledDestinationsListByPoints>
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
