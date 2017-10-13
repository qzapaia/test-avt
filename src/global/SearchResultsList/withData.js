import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import SearchResultsList from './'
import { connect } from "react-redux";

const SearchResultsListWithData = (props) => {
    return (<SearchResultsList flightClusters={props.flightClusters}/>)
}

//const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponentSearch);

export default SearchResultsListWithData;
