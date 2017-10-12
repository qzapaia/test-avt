import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Price from '../Price';
import {Container, DetailInfo, FarePerPerson} from './styled';


const FareDetail = ({
                      title,
                      currency,
                      detailInfo
                   }) => (
  <Container>
    <Text type='l'>
      {title}
    </Text>
    <Price
      currency={currency}
      price={detailInfo.referencePrice}
      type='xl'
      color='darkergray'
    />
    <FarePerPerson tag='h2' type='xs' color='darkergray'>
      Tarifa por adulto
    </FarePerPerson>
    { detailInfo.items.map(item => (
      <DetailInfo>
        <Text color='darkergray'>
          {item.label}
        </Text>
        <Price
          currency={currency}
          price={item.price}
          type='s'
          color='darkergray'
        />
      </DetailInfo>
    ))}
      {/* <div>
        <span><Text>Precio contado</Text></span>
        <span>{currency} {detailInfo.priceWithoutInterest}</span>
      </div> */}
      {detailInfo.taxes &&
        <DetailInfo>
          <Text>
            Intereses
          </Text>
          <Price
            currency={currency}
            price={detailInfo.taxes}
            type='s'
            color='darkergray'
          />
        </DetailInfo>
      }

      {detailInfo.charges &&
        <DetailInfo>
          <Text>
            Intereses
          </Text>
          <Price
            currency={currency}
            price={detailInfo.charges}
            type='s'
            color='darkergray'
          />
        </DetailInfo>
      }

    { detailInfo.taxes &&
      <Text tag='p'>
        <Text type='xs'>
          TEA {detailInfo.taxes.TEA}%
        </Text>
        <Text type='xs'>
          CFT {detailInfo.taxes.CFT}%
        </Text>
      </Text>
    }

    <DetailInfo>
      <Text>
        Precio final
      </Text>
      <Price
        currency={currency}
        price={detailInfo.finalPrice}
        type='xl'
        color='brand'
      />
    </DetailInfo>

  </Container>
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
