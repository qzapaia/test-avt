import React from "react";
import { connect } from "react-redux";

import { get } from "lodash";

import Footer from "./";

const mapStateToProps = ({media}) => ({
  media:media
});

export default connect(mapStateToProps)(Footer);
