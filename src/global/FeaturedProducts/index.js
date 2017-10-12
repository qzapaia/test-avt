import React from "react";
import PropTypes from "prop-types";

import { map } from "lodash";

import Icon from "../Icon";
import ProductCard from "../ProductCard";
import Text from "../Text";
import {Container, ImageTitleContainer, Layout} from "./styled";

const FeaturedProducts = ({ products, listMode, layout }) => (
  <Container>
    {map(products, product => (
      <Layout layout={layout} listMode={listMode} >
        <ProductCard
          key={"productCard" + product.title + product.price}
          href={product.href}
          mediaImage={product.mediaImage}
          price={Number(product.price)}
          supportingInfo={product.supportingInfo}
          subtitle={product.subtitle}
          title={product.title}
          listMode={listMode}
          imageTitle={
            product.imageTitle && (
              <ImageTitleContainer>
                <Icon id="Vuelos" color='white' />
                <Text type="s">{product.imageTitle}</Text>
              </ImageTitleContainer>
            )
          }
        />
      </Layout>

    ))}
  </Container>
);

FeaturedProducts.propTypes = {
  products: PropTypes.array,
  listMode: PropTypes.bool,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FeaturedProducts.defaultProps = {
  products: [],
  listMode: false,
  layout: '0'
};

export default FeaturedProducts;
