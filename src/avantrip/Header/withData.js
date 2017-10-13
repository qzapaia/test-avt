import React from "react";
import { connect } from "react-redux";

import Header from "./";

const location = (typeof location != 'undefined') ? location : {};

const mapStateToProps = ({user, media}) => ({
  userData: user,
  media:media,
  currentPathname: location.pathname
});

export default connect(mapStateToProps)(Header);
