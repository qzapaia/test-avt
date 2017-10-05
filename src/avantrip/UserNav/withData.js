import React, { Component } from "react";
import { connect } from "react-redux";

import UserNav from "./";

import { get } from "lodash";
import { logout } from '../../global/User/actions';

const mapStateToProps = state => {
  return {
    data: {
      name: get(state, "user.facebook.name", ""),
      image: get(state, "user.facebook.image", "")
    }
}};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    logout: () => {
      dispatch(logout());
    }
  }
};

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(UserNav);

export default WithDataComponent;
