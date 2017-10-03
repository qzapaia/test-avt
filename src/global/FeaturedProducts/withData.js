import React from "react";
import { connect } from "react-redux";
import FeaturedProducts from "./";
import { map } from "lodash";
import moment from "moment";

import { getBestSellers, getPromotionalFlights } from "./actions";

const mapStateToProps = (state, ownProps) => {

  return {
    bestSellers: map(state.FeaturedProducts.bestsellers, value => ({
      price: value.price,
      title: value.title
    })),
    promotionalFlights: map(state.FeaturedProducts.promotionalFlights, value => ({
      price: value.price,
      title: value.title,
      media: value.image,
      imageTitle: value.publication_type,
      title: value.destination_name,
      subtitle: value.sub_title_bottom,
      supportingInfo: value.previous_price,
      href: value.url
    }))
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.type) {
    case "bestSellers":
      dispatch(getBestSellers());
      break;
    case "promotionalFlights":
      dispatch(getPromotionalFlights());
      break;
  }

  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);
