import React from "react";
import { connect } from "react-redux";

import { get } from "lodash";

import Header from "./";

const mapStateToProps = state => ({
  userData: get(state, "user", null)
});

export default connect(mapStateToProps)(Header);
