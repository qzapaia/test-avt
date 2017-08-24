import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import SearchResultWithFilters from './SearchResultWithFilters'
import _ from 'lodash';


// GrahQL Query
export const query = gql`{
  orchestrator {
  	availability {
      roundtrip(origin:"BUE", destination: "MIA", departureDate:"2017-10-10", returningDate:"2017-10-20", passengers: {adults:1, children:0, infants:0}, cabinClass:Economy, channel:"Desktop", portal:"avantrip") {
        clusters
        stages
        metas
        references
        recommendations
      }
    }
  }
}`

const SelectorComponent = (props) => {
  const {data:{orchestrator},filter} = props;
  console.log(props);
  // recorro orchestrator basado en filters

  return <SearchResultWithFilters
                {...props}
                data={orchestrator} />;
}

export default graphql(query)(SelectorComponent);
