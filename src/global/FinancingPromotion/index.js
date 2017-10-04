import React from 'react';
import PropTypes from 'prop-types';

import Container from './container.styled';

const FinancingPromotion = ({
  data
}) => (
  <Container>
    <a href="http://www.avantrip.com/oportunidades/financiacion-avantrip" target="_blank">
      <img src={data.image} />
    </a>
  </Container>
)

FinancingPromotion.propTypes = {
  data: PropTypes.object,
}

FinancingPromotion.defaultProps = {
  data: {},
}

export default FinancingPromotion;
