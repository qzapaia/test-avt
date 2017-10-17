import React, { Component } from 'react';

import { get } from 'lodash';
import { connect } from "react-redux";
import { subscribe, setEmail } from './actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubscribe: (type, value) => {
    dispatch(subscribe(type, value))
  },
  onChange: email => {
    dispatch(setEmail(email))
  }
});

export default (comp) => {
  return connect(mapStateToProps, mapDispatchToProps)(comp);
}
