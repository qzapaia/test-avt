import React, { Component } from "react";
import { connect } from "react-redux";

import UserNav from "./";

import { get } from "lodash";
import { logout } from '../../global/User/actions';

const mapStateToProps = state => ({
    data: {
      name: get(state, "user.facebook.name", ""),
      urlImage: get(state, "user.facebook.urlImage", "")
    }
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    logout: () => {
      dispatch(logout());
    }
  }
};

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(UserNav);

export default WithDataComponent;
