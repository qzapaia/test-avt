import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import SearchResultsList from './'
import { get, find, map } from 'lodash';
import { connect } from "react-redux";
import { getData } from './actions';
import { 
  clustersToAirlines,
  populateStages
} from './reducer';

const mapStateToProps = state => ({

  //repos: state.Redux.repos
});

const mapDispatchToProps = {
  //getRepos:getData
};

const SearchResultsListWithData = (props) => {
    return (<SearchResultsList clusters={props.clusters} flightClusters={props.flightClusters}/>)
}

// GrahQL Query
export const query = gql`
  query searchQuery(
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
            clusters,
            stages,
            metas,
            references
          }
        }
      }
    }`


const WithApolloComponentSearch = graphql(query,{
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
      clusters:[]
    })

    return populateStages({
      clusters:roundtrip.clusters,
      stages:roundtrip.stages
    });
  }
})(SearchResultsListWithData);



//const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentSearch);

export default WithApolloComponentSearch;
