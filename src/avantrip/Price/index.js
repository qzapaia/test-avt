import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {PriceContainer, CurrencyContainer} from './container.styled';
import {getSymbolFromCurrency} from 'currency-map-symbol';

const Price = (props) => {
  const {
    currency,
    currencySymbol,
    price,
    locateStringFormat,
    type
  } = props;

  return (
    <PriceContainer>
      <CurrencyContainer>
        <Text type={type}>{currencySymbol?getSymbolFromCurrency(currency): currency}</Text>
      </CurrencyContainer>
      <Text {...props} type={type} color="brand">{price.toLocaleString(locateStringFormat)}</Text>
    </PriceContainer>
  )
}


Price.propTypes = {
  ...Text.propTypes,
  currency: PropTypes.oneOf(['ARS']),
  currencySymbol: PropTypes.boolean,
  price:PropTypes.number.isRequired,
  locateStringFormat:PropTypes.string.isRequired,
}

Price.defaultProps = {
  ...Text.defaultProps,
  currency:'ARS',
  locateStringFormat:'es-AR',
  currencySymbol: false
}

export default Price;
