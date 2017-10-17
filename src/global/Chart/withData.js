import React, { Component } from "react";
import Chart from "./";

import { connect } from "react-redux";

const mapStateToProps = ({ media }) => ({
  media
});

export default connect(mapStateToProps)(Chart);
