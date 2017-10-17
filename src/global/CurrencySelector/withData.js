import React, { Component } from 'react';
import CurrencySelector from './'
import { connect } from "react-redux";
import { setCurrency } from './actions';

const mapStateToProps = state => ({
  value: state.currency.value
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: value => {
      dispatch(setCurrency(value))
    }
  }
};


const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);

export default WithDataComponent;
