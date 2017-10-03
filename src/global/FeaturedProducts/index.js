import React from "react";
import PropTypes from "prop-types";

import { map } from "lodash";

import Icon from "../Icon";
import ProductCard from "../ProductCard";
import Text from "../Text";

const FeaturedProducts = ({
  promotionalFlights,
  bestsellers,
  listMode
}) => (
  <div>
    {map(promotionalFlights ||  bestsellers , feature => (
      <ProductCard
        key={"productCard" + feature.title + feature.price}
        href={feature.href}
        media={feature.media}
        price={Number(feature.price)}
        supportingInfo={feature.supportingInfo}
        subtitle={feature.subtitle}
        title={feature.title}
        listMode={listMode}
        imageTitle={<div>
          <Icon
            height="m"
            id="Vuelos"/>
          <Text type="m">
            {feature.imageTitle}
          </Text>
        </div>
        }
      ></ProductCard>
    ))}
  </div>
);

FeaturedProducts.propTypes = {
  features: PropTypes.array,
  listMode: PropTypes.bool
};

FeaturedProducts.defaultProps = {
  features: [],
  listMode: false
};

export default FeaturedProducts;
