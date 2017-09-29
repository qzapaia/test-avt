import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/index';
import {PriceContainer, Currency} from './styled';
import {getSymbolFromCurrency} from 'currency-map-symbol';

const Price = (props) => {
  const {
    currency,
    currencySymbol,
    price,
    locateStringFormat,
    type,
    color
  } = props;

  return (
    <PriceContainer>
      <Currency type={type} color={color}>{currencySymbol?getSymbolFromCurrency(currency): currency}</Currency>
      <Text type={type} color={color}>{price.toLocaleString(locateStringFormat)}</Text>
    </PriceContainer>
  )
}


Price.propTypes = {
  ...Text.propTypes,
  currency: PropTypes.oneOf(['ARS']),
  currencySymbol: PropTypes.bool,
  price:PropTypes.number.isRequired,
  locateStringFormat:PropTypes.string.isRequired,
  color:PropTypes.string,
}

Price.defaultProps = {
  ...Text.defaultProps,
  currency:'ARS',
  locateStringFormat:'es-AR',
  currencySymbol: false,
  // this is the only difference between Text component and this one, default color for price is 'brand'
  color: 'brand'
}

export default Price;
