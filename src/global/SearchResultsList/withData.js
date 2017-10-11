import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import SearchResultsList from './'
import { get, find, map } from 'lodash';
import { connect } from "react-redux";



const mapStateToProps = state => ({

  //repos: state.Redux.repos
});

const mapDispatchToProps = {
  //getRepos:getData
};

const SearchResultsListWithData = (props) => {
    return (<SearchResultsList clusters={props.clusters} flightClusters={props.flightClusters}/>)
}

//const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentSearch);

export default SearchResultsListWithData;
