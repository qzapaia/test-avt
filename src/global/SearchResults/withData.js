import React, { Component } from 'react';
import { gql, graphql,compose } from 'react-apollo';
import SearchResults from './'
import { get, clone, map } from 'lodash';
import { connect } from "react-redux";
import { onBuy } from './actions';
import { populateFilters } from '../FlightsFilters/reducer'
import { populateStages , populateCluster } from '../SearchResultsList/reducer'
import { getClustersWithFilter } from '../SearchResults/reducer'
import { populateComparisonFlights } from '../FlightsComparisonTable/reducer'

const mapStateToProps = (state) => {
  const {paginate,flightsFilters} =  state;
  return {
    paginate: paginate,
    filters: flightsFilters
  }
};

const mapDispatchToProps = {
  onBuy
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

const mapPropsToOptions = ({
  origin,
  destination,
  departureDate,
  returningDate,
  passengersAdults,
  passengersChildren,
  passengersInfants,
  cabinClass,
  channel,
  portal,
  leg
}) => {

  const values = {
    origin,
    destination,
    departureDate,
    passengersAdults,
    passengersChildren,
    passengersInfants,
    cabinClass,
    channel,
    portal
  }

  if(leg == 'roundtrip'){
    return {
      variables: {
        ...values,
        returningDate
      },
    };
  }

  return {
    variables: {
      ...values
    },
  };
};

const mapResultsToProps = ({ownProps, data }) => {
  const {paginate, showItemsByPage,filters, onBuy} = ownProps;
  const trip = get(data,`orchestrator.availability.${ownProps.leg}`, {
    metas:[],
    references:[],
    clusters:[]
  })

  const newfilters =  populateFilters({
    filters:trip.metas.filters,
    references:trip.references,
    flightType:trip.metas.flightType
  });

  const newClusters = populateStages({
    references:trip.references,
    clusters:trip.clusters,
    stages:trip.stages,
    flightType:trip.metas.flightType
  });

  // ¿Se puede hacer esto? newClusters.clusters
  const comparisonFlights = populateComparisonFlights({
    references:trip.references,
    comparisonFlights:newClusters.clusters,
  });

  const clustersFiltered = populateCluster({
    references:trip.references,
    clusters: getClustersWithFilter({newClusters , paginate, showItemsByPage, filters})
  })

  const getCityByIATA = cities => (
    map(cities, city => ({
      code: city,
      name: get(trip, `references.cities[${city}]`, "")
    }))
  );

  return {
    ...newfilters,
    flightClusters: clustersFiltered,
    comparisonFlights: comparisonFlights,
    countItems: newClusters.flightClusters.length,
    countFlights: newClusters.clusters.length,
    onBuy: (clusterSelected) => {
      onBuy(clusterSelected, clone(get(data.orchestrator.availability, ownProps.leg, [])))
    },
    origin: getCityByIATA(ownProps.origin),
    destination: getCityByIATA(ownProps.destination),
    leg: ownProps.leg
  }
};


const WithApolloComponentSearch = compose(
  graphql(SearchQuery.roundtrip,{
    options: mapPropsToOptions,
    props: mapResultsToProps,
    skip: (ownProps) => !(ownProps.leg === 'roundtrip'),
  }),
  graphql(SearchQuery.oneway,{
    options: mapPropsToOptions,
    props: mapResultsToProps,
    skip: (ownProps) => !(ownProps.leg === 'oneway'),
  }),
  graphql(SearchQuery.multitrip,{
    options: mapPropsToOptions,
    props: mapResultsToProps,
    skip: (ownProps) => !(ownProps.leg === 'multitrip'),
  }),
)(SearchResults)


const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentSearch);
export default WithDataComponent;
