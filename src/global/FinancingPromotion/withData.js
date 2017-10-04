import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import FinancingPromotion from "./";

import { get } from "lodash";

// GrahQL Query
export const query = gql`{
  home {
    content {
      installments_without_interest {
        image
      }
    }
  }
}`;

const WithApolloComponent = graphql(query, {
  props: ({ ownProps, data: { home } }) => ({
    data: get(home, "content.installments_without_interest[0]", {})
  })
})(FinancingPromotion);

export default WithApolloComponent;
