import React, { Component } from 'react';
import FlightsComparisonTable from './'
import { connect } from "react-redux";

const mapStateToProps = ({media}) => ({
  media
});

const FlightsComparisonTableWithData = (props) => (
  <FlightsComparisonTable media={props.media} flights={props.flights}/>
);

FlightsComparisonTableWithData.defaultProps = {
  flights:[]
}

export default connect(mapStateToProps)(FlightsComparisonTableWithData);
