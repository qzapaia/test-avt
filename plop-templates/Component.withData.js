import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import {{componentName}} from './'
import { get } from 'lodash';
{{#redux}}
import { connect } from "react-redux";
import { getData, setData } from './actions';
{{/redux}}

{{#redux}}
const mapStateToProps = state => ({
  repos: state.Redux.repos
});

const mapDispatchToProps = {
  getRepos:getData
};
{{/redux}}

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
})({{componentName}});

{{#redux}}
const WithDataComponent = connect(mapStateToProps, mapDispatchToProps)(WithApolloComponent);
{{/redux}}

export default {{#redux}}WithDataComponent{{/redux}}{{^redux}}WithApolloComponent{{/redux}};
