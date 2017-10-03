import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import FeaturedDeals from './'

import { get } from 'lodash';
import { connect } from "react-redux";


// GrahQL Query
export const query = gql`{
  home{
    content{
      home_slider{
        image,
        url
      }
    }
  }
}`


const WithApolloComponent = graphql(query,{
  props: ({ ownProps, data: { home } }) => {
    return {
      deals: get(home,'content.home_slider',[]),
    }
},
})(FeaturedDeals);


export default WithApolloComponent;
