import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import FlightsFilters from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData, setChange, setClear } from "./actions";
import { populateFilters } from './reducer';

const mapStateToProps = ({flightsFilters}) => ({
  values:flightsFilters.values
});

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
    onExpand: change => {

    },
    onChange: (path, change) => {
      dispatch(setChange(path,change));
    },
    onClear: path => {
      dispatch(setClear(path));
    }
  };
};

const FlightsFiltersWithData = (props) => {
  return (<FlightsFilters {...props} options={props.filters} />)
}

// GrahQL Query
export const query = gql`
query FilterQuery(
  $origin: String!,
  $destination: String!,
  $departureDate: String!,
  $returningDate: String!,
  $passengersAdults: Int!,
  $passengersChildren: Int!,
  $passengersInfants: Int!,
  $cabinClass: FligthCabinClassInput!,
  $channel: String!,
  $portal: String!)
  {
    orchestrator{
      availability{
        roundtrip(origin:$origin,destination:$destination,departureDate:$departureDate,returningDate:$returningDate,
          passengers:{ adults:$passengersAdults,children:$passengersChildren,infants:$passengersInfants },cabinClass:$cabinClass,channel:$channel,portal:$portal){
          metas,references
        }
      }
    }
  }`

  const WithApolloComponentFilter = graphql(query,{
    options: props => ({
      variables : {
        origin : props.origin,
        destination : props.destination,
        departureDate : props.departureDate,
        returningDate : props.returningDate,
        passengersAdults : props.passengersAdults,
        passengersChildren : props.passengersChildren,
        passengersInfants : props.passengersInfants,
        cabinClass : props.cabinClass,
        channel : props.channel,
        portal : props.portal, 
      },
    }),
    props: ({ ownProps, data }) => {
      const roundtrip = get(data,'orchestrator.availability.roundtrip', {
        metas:[],
        references:[]
      })
  
      return populateFilters({
        filters:roundtrip.metas.filters,
        references:roundtrip.references,
        flightType:roundtrip.metas.flightType
      });
    }
  })(FlightsFiltersWithData);

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentFilter);
export default WithDataComponent;
