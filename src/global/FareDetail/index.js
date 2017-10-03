import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

const Title = styled.h1`
  color:${props=>props.theme.color};
`
const FareDetail = ({
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
          <Title>
            <Text>Tarifa por adulto</Text>
          </Title>
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

FareDetail.propTypes = {
  lastPlaces: PropTypes.string,
  currency: PropTypes.string.isRequired,
  detailInfo: PropTypes.object.isRequired,
}

FareDetail.defaultProps = {
  theme:{}
}

export default FareDetail;
