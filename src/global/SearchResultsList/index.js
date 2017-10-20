import React from 'react';
import PropTypes from 'prop-types';
import { get, find, map } from 'lodash';
import List from '../List';
import FlightCluster from '../FlightCluster';
import {ClusterItem} from './styled';

const onCustomCheckout = (next, value) => {
  next(value);
}


const SearchResultsList = ({clusters, flightClusters, onBuy}) => {
  let children = [];
  map(flightClusters, fc => {
    children.push(
      <ClusterItem>
        <FlightCluster data={fc}
          onBuy={(selectedOptions) => {
           onBuy({
            id:fc.id,
            options: selectedOptions
          })
        }} />
      </ClusterItem>
    );
  });


  return (
    <List type="list">
      {children}
    </List>
  )
}

export default SearchResultsList;
