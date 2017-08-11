import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import FlightsList from './FlightsList'
import _ from 'lodash';

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

const MiddleComponent = (props) => {
  const hoteles = _(props).get('data.hoteles.search.hoteles',[]);
  return <FlightsList items={hoteles} />;
}

export default graphql(query)(MiddleComponent);
