import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Test from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData } from './actions';

const mapStateToProps = state => ({
  repos: state.Test.repos
});

const mapDispatchToProps = {
  getRepos:getData
};

// GrahQL Query
export const query = gql`{
  home{
    content{
      bestsellers_flights{
        price_from,
        image,
        destination_name,
        flight_type,
        url
      }
    }
  }
}`


const WithApolloComponent = graphql(query,{
  props: ({ ownProps, data: { home } }) => ({
    flights: get(home,'content.bestsellers_flights',[]).slice(0,10),
  }),
})(Test);

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);

export default WithDataComponent;
