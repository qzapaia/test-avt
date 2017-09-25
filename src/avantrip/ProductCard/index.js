import React from 'react';
import PropTypes from 'prop-types';
import {Container, MainPictureContainer, MainInfoContainer, LeftContainer, RightContainer, SubtitleContainer, PriceContainer} from './container.styled';
import Text from '../Text/index';
import Icon from '../Icon/index';

const ProductCard = ({
                      href,
                      target,
                      listMode,
                      media,
                      price,
                      supportingInfo,
                      subtitle,
                      title,
                    }) => (
  <Container href={href} target={target} listMode={listMode}>

    <MainPictureContainer>
      <img src={media} alt=""/>
    </MainPictureContainer>
    <MainInfoContainer>

      <LeftContainer>
        <Text color='brand' tag='h1' type='l'>
          {title}
        </Text>
        <SubtitleContainer>
          <Text color='darkergray' tag='p' type='xs'>
            {subtitle}
          </Text>
        </SubtitleContainer>
      </LeftContainer>
      <RightContainer>
        <PriceContainer>
          <Text color='brand' tag='p' type='xs'>
            {supportingInfo}
          </Text>
          <Text color='brand' tag='p' type='xl'>
            ${price}
          </Text>
        </PriceContainer>
        <Icon id='Back' height='32px' />
      </RightContainer>

    </MainInfoContainer>


  </Container>
)
/*
Este comp a diferencia del global establece muchas de sus props
como strings y no como nodo ya que en este nivel está mucho más establecido
como tienen que lucir. el global acepta cualquier nodo para poder ser
configurable.
*/
ProductCard.propTypes = {
  href:PropTypes.string,
  listMode:PropTypes.bool.isRequired,
  media:PropTypes.node,
  price:PropTypes.string,
  supportingInfo:PropTypes.string,
  subtitle:PropTypes.string,
  title:PropTypes.string,
  target:PropTypes.string,
}

ProductCard.defaultProps = {
  listMode:false,
}

export default ProductCard;
