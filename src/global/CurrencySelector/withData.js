import React, { Component } from 'react';
import CurrencySelector from './'
import { connect } from "react-redux";
import { setCurrency } from './actions';

const mapStateToProps = state => ({
  value: state.currency.value
});

const mapDispatchToProps = { onClick:setCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
