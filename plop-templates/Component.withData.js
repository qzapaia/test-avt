import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import {{componentName}} from './'
import _ from 'lodash';


// GrahQL Query
export const query = gql`{
  hoteles {
    search(
      location:"3tke"
      check_in:"2017-10-25"
      check_out:"2017-10-28"
      rooms:[{
        adultos:2
        menores:0
        ages:[0]
      }]
      dateless:false
    ) {
      searchId
      trackingCode
      hoteles {
        id
        name
        esDestacado
      }
    }
  }
}`

const SelectorComponent = (props) => {
  console.log('data from graphql', props.data);
  return <{{componentName}} {...props} />;
}

export default graphql(query)(SelectorComponent);
