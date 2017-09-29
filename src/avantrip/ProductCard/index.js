import React from 'react';
import {Container, MainPictureContainer, MainInfoContainer, LeftContainer, RightContainer, SubtitleContainer, PriceContainer, IconContainer} from './container.styled';
import PropTypes from 'prop-types';
import Text from '../Text';
import Icon from '../Icon';
import Price from '../Price';

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

    <MainPictureContainer listMode={listMode}>
      <img listMode={listMode} src={media} alt=""/>
    </MainPictureContainer>
    <MainInfoContainer listMode={listMode}>

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
          <Price color='brand' tag='p' type='xl' price={price} />
        </PriceContainer>
        <IconContainer>
          <Icon height='40px' id='Back' color='brand' />
        </IconContainer>
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
