import React from 'react';
import PropTypes from 'prop-types';

import Container from './styled';
import Slider from '../Slider';

import { map } from 'lodash';

const FeaturedDeals = ({
  deals,
}) => (
  <Container>
    <Slider settings={{autoplay: false}}>
      {map(deals, deal => (
        <a style={{display:"inline"}} href={deal.url}>
          <img src={deal.image} />
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
