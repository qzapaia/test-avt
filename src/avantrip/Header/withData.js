import React from "react";
import { connect } from "react-redux";

import Header from "./";

const mapStateToProps = ({user, media}) => ({
  userData: user,
  test:console.log(media),
  media:media,
  currentPathname: location.pathname
});

export default connect(mapStateToProps)(Header);
