import React from "react";
import { connect } from "react-redux";
import FeaturedProducts from "./";
import { map } from "lodash";
import moment from "moment";

import { getProducts } from "./actions";

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.FeaturedProducts.products
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getProducts(ownProps.type));

  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts);
