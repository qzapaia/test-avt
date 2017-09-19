import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const CheckoutFareDetail = ({
                              lastPlaces,
                              currency,
                              detailInfo
                           }) => (
  <div>
    { lastPlaces &&
      <div>
        <Text>¡ÚLTIMOS {lastPlaces} LUGARES!</Text>
      </div>
    }
    <div>
        <div>
          <Text>Tarifa por adulto</Text>
        </div>
        <div>
          {currency} {detailInfo.adult.unitPrice}
        </div>
    </div>
    <div>
      { detailInfo.adult &&
        <div>
          <span>
            {detailInfo.adult.quantity}
            <Text>Adultos</Text>
          </span>
          <span>
            {currency}
            {detailInfo.adult.unitPrice * detailInfo.adult.quantity}
          </span>
        </div>
      }
      { detailInfo.children &&
        <div>
          <span>
            {detailInfo.children.quantity}
            <Text>Niños</Text>
          </span>
          <span>
            {currency}
            {detailInfo.children.unitPrice * detailInfo.children.quantity}
          </span>
        </div>
      }
      { detailInfo.babies &&
        <div>
          <span>
            {detailInfo.babies.quantity}
            <Text>Bebés</Text>
          </span>
          <span>
            {currency}
            {detailInfo.babies.unitPrice * detailInfo.babies.quantity}
          </span>
        </div>
      }
    </div>
    <div>
      <div>
        <span><Text>Precio contado</Text></span>
        <span>{currency} {detailInfo.priceWithoutInterest}</span>
      </div>
        <div>
          <span><Text>Intereses</Text></span>
          <span>{currency} {detailInfo.interest.value}</span>
        </div>
    </div>
    <div>
      <div>
        <Text>Precio final</Text>
      </div>
      <div>
        {currency} {detailInfo.finalPrice}
      </div>
      <div>
        <Text>TEA {detailInfo.interest.TEA}%</Text>
        -
        <Text>CFT {detailInfo.interest.CFT}%</Text>
      </div>
    </div>
  </div>
)

CheckoutFareDetail.propTypes = {
  lastPlaces: PropTypes.string,
  currency: PropTypes.string.isRequired,
  detailInfo: PropTypes.object.isRequired
}

export default CheckoutFareDetail;
