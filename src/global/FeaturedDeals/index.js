import React from 'react';
import PropTypes from 'prop-types';

import Container from './container.styled';
import Slide from './Slide';
import Slider from '../Slider';

import { map } from 'lodash';

const FeaturedDeals = ({
  deals,
}) => (
  <Container>
    <Slider settings={{autoplay: false}}>
      {map(deals, deal => (
        <a href={deal.url}>
          <Slide image={deal.image} />
        </a>
      ))}
    </Slider>
  </Container>
)

FeaturedDeals.propTypes = {
  deals: PropTypes.arr
}

FeaturedDeals.defaultProps = {
  deals:[]
}

export default FeaturedDeals;
