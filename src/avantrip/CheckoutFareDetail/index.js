import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const CheckoutFareDetail = ({
                              title,
                              currency,
                              detailInfo
                           }) => (
  <div>
    <div>
      {title}
    </div>
    <div>
        <div>
          <Text>Tarifa por adulto</Text>
        </div>
        <div>
          {currency} {detailInfo.referencePrice}
        </div>
    </div>
    <div>
      { detailInfo.items.map(item => (
        <div>
          <span>
            {item.label}
          </span>
          <span>
            {currency}
            {item.price}
          </span>
        </div>
      ))}
    </div>
    <div>
      <div>
        <span><Text>Precio contado</Text></span>
        <span>{currency} {detailInfo.priceWithoutInterest}</span>
      </div>
      {detailInfo.interest &&
        <div>
          <span><Text>Intereses</Text></span>
          <span>{currency} {detailInfo.interest.value}</span>
        </div>
      }
    </div>
    <div>
      <div>
        <Text>Precio final</Text>
      </div>
      <div>
        {currency} {detailInfo.finalPrice}
      </div>
      { detailInfo.interest &&
        <div>
          <Text>TEA {detailInfo.interest.TEA}%</Text>
          -
          <Text>CFT {detailInfo.interest.CFT}%</Text>
        </div>
      }
    </div>
  </div>
)

CheckoutFareDetail.propTypes = {
  lastPlaces: PropTypes.string,
  currency: PropTypes.string.isRequired,
  detailInfo: PropTypes.object.isRequired
}

export default CheckoutFareDetail;
