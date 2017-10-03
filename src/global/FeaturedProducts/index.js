import React from "react";
import PropTypes from "prop-types";

import { map } from "lodash";

import Icon from "../Icon";
import ProductCard from "../ProductCard";
import Text from "../Text";

const FeaturedProducts = ({
  products,
  listMode
}) => (
  <div>
    {map(products , product => (
      <ProductCard
        key={"productCard" + product.title + product.price}
        href={product.href}
        media={product.media}
        price={Number(product.price)}
        supportingInfo={product.supportingInfo}
        subtitle={product.subtitle}
        title={product.title}
        listMode={listMode}
        imageTitle={product.imageTitle && <div>
          <Icon
            height="m"
            id="Vuelos"/>
          <Text type="m">
            {product.imageTitle}
          </Text>
        </div>
        }
      ></ProductCard>
    ))}
  </div>
);

FeaturedProducts.propTypes = {
  products: PropTypes.array,
  listMode: PropTypes.bool
};

FeaturedProducts.defaultProps = {
  products: [],
  listMode: false
};

export default FeaturedProducts;
