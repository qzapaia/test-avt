import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Home from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData } from './actions';

const mapStateToProps = ({media}) => ({
  media: media
});

const mapDispatchToProps = {};


// const WithApolloComponent = graphql(query,{
//   props: ({ ownProps, data: { hoteles } }) => ({
//     hoteles: get(hoteles,'search.hoteles',[]).slice(0,10),
//   }),
// })(Home);

const WithApolloComponent = Home;

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);

export default WithDataComponent;
