import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import ProductCard from './'
import { get } from 'lodash';
import { connect } from "react-redux";
// import { getData } from './actions';

const mapStateToProps = ({media}) => ({
  media: media
});

const mapDispatchToProps = {};

const WithApolloComponent = ProductCard;

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);

export default WithDataComponent;
