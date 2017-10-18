import React from 'react';
import PropTypes from 'prop-types';

import { Container, Slide } from './styled';
import Slider from '../Slider';

import { map } from 'lodash';

const optimizeImage = url => (
  'https://res.cloudinary.com/avantrip-com/image/fetch/w_1440/'+
  // 'https://res.cloudinary.com/avantrip-com/image/fetch/h_450/'+
  url
)

const FeaturedDeals = ({
  deals,
}) => (
  <Container>
    <Slider>
      {map(deals, deal => (
        <Slide
          bg={optimizeImage(deal.image)}
          href={deal.url}
          key={deal.url} 
        />
      ))}
    </Slider>
  </Container>
)

FeaturedDeals.propTypes = {
  deals: PropTypes.array
}

FeaturedDeals.defaultProps = {
  deals:[]
}

export default FeaturedDeals;
