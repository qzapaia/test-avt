import React from "react";
import { connect } from "react-redux";

import FacebookLogin from "./";

import { setFacebookUser } from '../../global/User/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFacebookSignup: userData => {
      dispatch(setFacebookUser(userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);
