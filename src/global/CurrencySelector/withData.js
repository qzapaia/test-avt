import React, { Component } from 'react';
import CurrencySelector from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { setCurrency } from './actions';

const mapStateToProps = state => ({
  repos: state.Redux.repos
});

const mapDispatchToProps = {
  onClick: value => {
    console.log(value)
  }
};


const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);

export default WithDataComponent;
