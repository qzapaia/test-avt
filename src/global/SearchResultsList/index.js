import React from 'react';
import PropTypes from 'prop-types';
import { get, find, map } from 'lodash';
import List from '../List';
import FlightCluster from '../FlightCluster';


const SearchResultsList = ({clusters, flightClusters, onClick}) => {
  let children = [];
  console.log(flightClusters,clusters)
  flightClusters.map( (fc, i) => {
    children.push(
      <div key={i} style={{padding:'20px'}}>
        <FlightCluster data={fc} /> 
      </div>
    )
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
