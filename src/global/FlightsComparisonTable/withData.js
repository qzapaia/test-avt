import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import FlightsComparisonTable from './'
import { connect } from "react-redux";

const FlightsComparisonTableWithData = (props) => {
  return (<FlightsComparisonTable flights={props.flights.comparisonFlights}/>)
}

FlightsComparisonTableWithData.defaultProps = {
  flights:[]
}

export default FlightsComparisonTableWithData;
