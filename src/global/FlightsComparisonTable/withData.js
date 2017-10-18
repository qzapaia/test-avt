import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import FlightsComparisonTable from './'
import { connect } from "react-redux";

const mapStateToProps = ({media}) => ({
  media
});

const FlightsComparisonTableWithData = (props) => {
  return (<FlightsComparisonTable media={props.media} flights={props.flights.comparisonFlights}/>)
}

export default connect(mapStateToProps)(FlightsComparisonTableWithData);
