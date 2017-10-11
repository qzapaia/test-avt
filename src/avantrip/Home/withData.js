import React, { Component } from 'react';
import Home from './'

import { connect } from "react-redux";

const mapStateToProps = ({media}) => ({
  media: media
});

export default connect(mapStateToProps)(Home);
