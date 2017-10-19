import React, { Component } from 'react';
import FlightsComparisonTable from './'

const FlightsComparisonTableWithData = (props) => (
  <FlightsComparisonTable flights={props.flights}/>
);

FlightsComparisonTableWithData.defaultProps = {
  flights:[]
}

export default FlightsComparisonTableWithData;
