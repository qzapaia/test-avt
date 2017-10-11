import React, { Component } from 'react';
import { gql, graphql,compose } from 'react-apollo';
import SearchResults from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData } from './actions';
import { populateFilters } from '../FlightsFilters/reducer'
import { populateStages } from '../SearchResultsList/reducer'


const mapStateToProps = state => ({
  //repos: state.Redux.repos
});

const mapDispatchToProps = {
  //getRepos:getData
};

const SearchQuery = {
  roundtrip: gql`
  query roundtripQuery(
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
    }`,
  oneway: gql`
  query oneWayQuery(
    $origin: String!,
    $destination: String!,
    $departureDate: String!,
    $passengersAdults: Int!,
    $passengersChildren: Int!,
    $passengersInfants: Int!,
    $cabinClass: FligthCabinClassInput!,
    $channel: String!,
    $portal: String!)
    {
      orchestrator{
        availability{
          oneway(origin:$origin,destination:$destination,departureDate:$departureDate,
            passengers:{ adults:$passengersAdults,children:$passengersChildren,infants:$passengersInfants },cabinClass:$cabinClass,channel:$channel,portal:$portal){
            clusters,
            stages,
            metas,
            references
          }
        }
      }
    }`,
  multitrip: gql`
  query multiTripQuery(
    $origin: [String]!,
    $destination: [String]!,
    $departureDate: [String]!,
    $passengersAdults: Int!,
    $passengersChildren: Int!,
    $passengersInfants: Int!,
    $cabinClass: FligthCabinClassInput!,
    $channel: String!,
    $portal: String!){ 
      orchestrator{
        availability{
          multitrip(origin:$origin,destination:$destination,departureDate:$departureDate,
            passengers:{adults:$passengersAdults,children:$passengersChildren,infants:$passengersInfants} cabinClass:$cabinClass,channel:$channel,portal:$portal){
            clusters,
            stages,
            metas,
            references
          }
        }
      }
    }`
}


const WithApolloComponentSearch = compose(
  graphql(SearchQuery.roundtrip,{
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
        portal : props.portal
      },
    }),
    props: ({ ownProps, data }) => {
      const roundtrip = get(data,'orchestrator.availability.roundtrip', { 
        metas:[],
        references:[],
        clusters:[]
      })

      const filters =  populateFilters({
        filters:roundtrip.metas.filters,
        references:roundtrip.references,
        flightType:roundtrip.metas.flightType
      });

      const newClusters = populateStages({
        clusters:roundtrip.clusters,
        stages:roundtrip.stages
      });

      return { 
        ...filters,
        ...newClusters
      }
    },
    skip: (ownProps) => !(ownProps.leg === 'roundtrip'),
  }),
  graphql(SearchQuery.oneway,{
    options: props => ({
      variables : {
        origin : props.origin,
        destination : props.destination,
        departureDate : props.departureDate,
        passengersAdults : props.passengersAdults,
        passengersChildren : props.passengersChildren,
        passengersInfants : props.passengersInfants,
        cabinClass : props.cabinClass,
        channel : props.channel,
        portal : props.portal
      },
    }),
    props: ({ ownProps, data }) => {
      const oneway = get(data,'orchestrator.availability.oneway', { 
        metas:[],
        references:[],
        clusters:[]
      })

      const filters =  populateFilters({
        filters:oneway.metas.filters,
        references:oneway.references,
        flightType:oneway.metas.flightType
      });

      const newClusters = populateStages({
        clusters:oneway.clusters,
        stages:oneway.stages
      });

      return { 
        ...filters,
        ...newClusters
      }
    },
    skip: (ownProps) => !(ownProps.leg === 'oneway'),
  }),
  graphql(SearchQuery.multitrip,{
    options: props => ({
      variables : {
        origin : props.origin,
        destination : props.destination,
        departureDate : props.departureDate,
        passengersAdults : props.passengersAdults,
        passengersChildren : props.passengersChildren,
        passengersInfants : props.passengersInfants,
        cabinClass : props.cabinClass,
        channel : props.channel,
        portal : props.portal
      },
    }),
    props: ({ ownProps, data }) => {
      const multitrip = get(data,'orchestrator.availability.multitrip', { 
        metas:[],
        references:[],
        clusters:[]
      })

      const filters =  populateFilters({
        filters:multitrip.metas.filters,
        references:multitrip.references,
        flightType:multitrip.metas.flightType
      });

      const newClusters = populateStages({
        clusters:multitrip.clusters,
        stages:multitrip.stages
      });

      return { 
        ...filters,
        ...newClusters
      }
    },
    skip: (ownProps) => !(ownProps.leg === 'multitrip'),
  }),    
)(SearchResults)

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentSearch);
export default WithDataComponent;
