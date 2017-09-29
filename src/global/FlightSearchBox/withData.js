import React, { Component } from 'react';
import FlightsearchBox from './'
import { connect } from "react-redux";
import { setSearchBoxValue, setSearch } from './actions';

const mapStateToProps = state => {
  return {
  value: state.search
}};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: keyValue => {
      dispatch(setSearchBoxValue(keyValue))
    },
    onSearch: value => {
      dispatch(setSearch(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsearchBox);
