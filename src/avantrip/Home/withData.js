import React, { Component } from "react";
import Home from "./";

import { connect } from "react-redux";

const mapStateToProps = ({ media, subscribe }) => ({
  media,
  subscribe
});

export default connect(mapStateToProps)(Home);
