import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text'

const Price = (props) => {
  const {
    currency,
    price,
    locateStringFormat,
    type
  } = props;

  return (
    <div>
      <Text type={type}>{currency}</Text>
      <Text {...props} type={type} color="brand">{price.toLocaleString(locateStringFormat)}</Text>
    </div>
  )
}


Price.propTypes = {
  ...Text.propTypes,
  currency: PropTypes.oneOf(['ARS']),
  price:PropTypes.number.isRequired,
  locateStringFormat:PropTypes.string.isRequired,
}

Price.defaultProps = {
  ...Text.defaultProps,
  currency:'ARS',
  locateStringFormat:'es-AR'
}

export default Price;
