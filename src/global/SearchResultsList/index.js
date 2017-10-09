import React from 'react';
import PropTypes from 'prop-types';
import { get, find, map } from 'lodash';
import List from '../List';


const SearchResultsList = ({clusters,onClick}) => {
  let children = [];

  clusters.map((cluster,i) => {
    children.push(
    <div key={i}>
                hash: {cluster.price.hash},
                fee: {cluster.price.fee},
                totalPrice: {cluster.price.totalPrice},
                originalPrice: {cluster.price.originalPrice}
    </div>);
  });

  return <List type="list">
          {children}
        </List>
}

export default SearchResultsList;
