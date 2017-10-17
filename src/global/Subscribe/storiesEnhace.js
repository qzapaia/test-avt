import React from "react";
import { connect } from "react-redux";

import { get } from "lodash";

const mapStateToProps = (state, ownProps) => ({
  value: {
    city: get(ownProps, "value.city", null)
  },
  email: get(state, "subscribe.email", ""),
  subscriptionStatus: get(state, "subscribe.status", ""),
  title: ownProps.title
});

export default Comp => connect(mapStateToProps)(Comp);
