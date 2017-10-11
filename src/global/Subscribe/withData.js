import React from "react";
import { connect } from "react-redux";
import Subscribe from "./";

import { subscribe, setEmail } from "./actions";

const mapStateToProps = state => {
  return {
    email: state.homeSubscribe.email,
    subscriptionStatus: state.homeSubscribe.subscriptionStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: email => {
      dispatch(
        setEmail(email)
      )
    },
    onSubscribe: email => {
      dispatch(
        subscribe(email)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
