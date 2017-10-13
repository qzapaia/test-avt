import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';
import Slider from '../Slider';

import { map } from 'lodash';

const optimizeImage = url => (
  'https://res.cloudinary.com/avantrip-com/image/fetch/w_1280,q_95/'+
  url
)

const FeaturedDeals = ({
  deals,
}) => (
  <Container>
    <Slider>
      {map(deals, deal => (
        <div>
          <a href={deal.url}>
            <img src={optimizeImage(deal.image)} />
          </a>
        </div>
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
