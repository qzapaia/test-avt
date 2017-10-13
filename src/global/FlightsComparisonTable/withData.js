import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import FlightsComparisonTable from './'
import { connect } from "react-redux";

const FlightsComparisonTableWithData = (props) => {
  return (<FlightsComparisonTable flights={props.flights.comparisonFlights}/>)
}

export default FlightsComparisonTableWithData;
