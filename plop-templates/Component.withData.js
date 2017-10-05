import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import {{componentName}} from './'
import { get } from 'lodash';
{{#redux}}
import { connect } from "react-redux";
import { getData } from './actions';
{{/redux}}

{{#redux}}
const mapStateToProps = state => ({
  repos: state.{{componentName}}.repos
});

const mapDispatchToProps = {
  getRepos:getData
};
{{/redux}}

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
})({{componentName}});

{{#redux}}
const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);
{{/redux}}

export default {{#redux}}WithDataComponent{{/redux}}{{^redux}}WithApolloComponent{{/redux}};
