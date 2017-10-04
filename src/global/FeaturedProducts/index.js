import React from "react";
import PropTypes from "prop-types";

import { map } from "lodash";

import Icon from "../Icon";
import ProductCard from "../ProductCard";
import Text from "../Text";
import {Container, ImageTitleContainer} from "./styled";

const FeaturedProducts = ({ products, listMode }) => (
  <Container>
    {map(products, product => (
      <ProductCard
        key={"productCard" + product.title + product.price}
        href={product.href}
        media={product.media}
        price={Number(product.price)}
        supportingInfo={product.supportingInfo}
        subtitle={product.subtitle}
        title={product.title}
        listMode={listMode}
        imageTitle={
          product.imageTitle && (
            <ImageTitleContainer>
              <Icon height="m" id="Vuelos" color='white' />
              <Text type="s">{product.imageTitle}</Text>
            </ImageTitleContainer>
          )
        }
      />
    ))}
  </Container>
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
