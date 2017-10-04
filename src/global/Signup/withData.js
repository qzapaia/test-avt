import React from "react";
import { connect } from "react-redux";

import FacebookLogin from "./";


import { setUser } from "./actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFacebookSignup: userData => {
      dispatch(setUser(userData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);
