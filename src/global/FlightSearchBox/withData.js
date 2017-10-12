import React, { Component } from 'react';
import FlightSearchBox from './'
import { connect } from "react-redux";
import { map } from "lodash";
import { setSearchBoxValue, createSearch, getDestinations, setSearchBoxflight } from './actions';

const mapStateToProps = state => ({
  searchValues: state.search,
  destinations: map(state.search.destinations, destination => ({
    description: destination.description,
    iata_code: destination.iata_code,
    city: destination.city
  })),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getDestinations());

  return {
    onSetSearchBoxFlight: value => {
      dispatch(setSearchBoxflight(value))
    },
    onChange: keyValue => {
      dispatch(setSearchBoxValue(keyValue))
    },
    onSearch: value => {
      dispatch(createSearch(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchBox);
