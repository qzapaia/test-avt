import React from 'react';
import PropTypes from 'prop-types';
import { get, find, map } from 'lodash';
import List from '../List';
import FlightCluster from '../FlightCluster';


const onCustomCheckout = (next, value) => {
  next(value);
}


const SearchResultsList = ({clusters, flightClusters, onBuy}) => {
  let children = [];
  map(flightClusters, fc => {
    children.push(
      <div style={{ padding: "20px" }}>
        <FlightCluster data={fc} 
          onBuy={(selectedOptions) => {
           onBuy({
            id:fc.id, 
            options: selectedOptions
          })
        }} />
      </div>
    );
  });


  return (
    <List type="list">
      {children}
    </List>
  )
}

export default SearchResultsList;
