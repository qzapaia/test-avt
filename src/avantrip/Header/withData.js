import React from "react";
import { connect } from "react-redux";

import { get } from "lodash";

import Header from "./";

const mapStateToProps = ({user, media}) => ({
  userData: user,
  test:console.log(media),
  media:media
});

export default connect(mapStateToProps)(Header);
