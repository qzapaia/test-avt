import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';

import FeaturedProducts from './'

import { get, map } from 'lodash';
import { connect } from "react-redux";


// GrahQL Query
const queryPromotional = gql`{
  home{
    content{
     promotional_banners{
        price
        image,
        publication_type,
        destination_name,
        sub_title_bottom,
        previous_price,
        url
      }
    }
  }
}`

const queryBestsellers = gql`{
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

const WithApolloComponent = compose(
  graphql(queryBestsellers, {
    skip: (ownProps) => ownProps.type != "bestSellers",
    props: ({ ownProps, data: { home } }) => ({
      products: map(get(home,'content.bestsellers_flights',[]), bestSeller => ({
        price: bestSeller.price_from.replace(".", ""),
        media: bestSeller.image,
        title: bestSeller.destination_name,
        subtitle: bestSeller.flight_type,
        href: bestSeller.url
      })
    )
  })}),
  graphql(queryPromotional, {
    skip: (ownProps) => ownProps.type != "promotionalFlights",
    props: ({ ownProps, data: { home } }) => ({
      products: map(get(home,'content.promotional_banners',[]), flight => ({
        price: flight.price.replace(".", ""),
        media: flight.image,
        imageTitle: flight.publication_type,
        title: flight.destination_name,
        subtitle: flight.sub_title_bottom,
        supportingInfo: flight.previous_price,
        href: flight.url
      })
    )
  })})
) (FeaturedProducts);


export default WithApolloComponent;
