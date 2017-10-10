import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styled';
import Slider from '../Slider';

import { map } from 'lodash';

const FeaturedDeals = ({
  deals,
}) => (
  <Container>
    <Slider>
      {map(deals, deal => (
        <div>
          <a href={deal.url}>
            <img src={deal.image} />
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
