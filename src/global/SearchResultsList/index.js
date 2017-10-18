import React from 'react';
import PropTypes from 'prop-types';
import { get, find, map } from 'lodash';
import List from '../List';
import FlightCluster from '../FlightCluster';


const onCustomCheckout = (next, value) => {
  next(value);
}


const SearchResultsList = ({clusters, flightClusters, onCheckout}) => {
  let children = [];
  map(flightClusters, fc => {
    children.push(
      <div style={{ padding: "20px" }}>
        <FlightCluster data={fc} 
          onCheckout={(selectedOptions) => {
           onCheckout({
            id:fc.id, 
            options: selectedOptions
          })
        }} />
      </div>
    );
  });

  /*
  clusters.map((cluster,i) => {
    children.push(
    <div key={i}>
                hash: {cluster.price.hash},
                fee: {cluster.price.fee},
                totalPrice: {cluster.price.totalPrice},
                originalPrice: {cluster.price.originalPrice}
    </div>);
  });
  */

  return (
    <List type="list">
      {children}
    </List>
  )
}

export default SearchResultsList;
