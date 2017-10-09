import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Home from './'
import { get } from 'lodash';
import { connect } from "react-redux";
import { getData } from './actions';

const mapStateToProps = ({Redux}) => ({
  repos: Redux.repos
});

const mapDispatchToProps = {
  getRepos:getData
};

// GrahQL Query
export const query = gql`{
  hoteles {
    search(
      location:"3tke"
      check_in:"2017-10-25"
      check_out:"2017-10-28"
      rooms:[{
        adultos:2
        menores:0
        ages:[0]
      }]
      dateless:false
    ) {
      searchId
      trackingCode
      hoteles {
        id
        name
        esDestacado
      }
    }
  }
}`


const WithApolloComponent = graphql(query,{
  props: ({ ownProps, data: { hoteles } }) => ({
    hoteles: get(hoteles,'search.hoteles',[]).slice(0,10),
  }),
})(Home);

const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);

export default WithDataComponent;
