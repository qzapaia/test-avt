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

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(FlightsFilters);
export default WithDataComponent;
