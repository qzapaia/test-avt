import React from 'react';
import {
  Container,
  MainPictureContainer,
  MainInfoContainer,
  LeftContainer,
  RightContainer,
  SubtitleContainer,
  PriceContainer,
  IconContainer,
  ImageTitleContainer
} from './styled';
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
                      imageTitle
                    }) => {
  console.log("href", href);
  return <Container href={href} target={target} listMode={listMode}>

    <MainPictureContainer listMode={listMode}>
      <img src={media} alt=""/>
      {listMode ?
        null :
        <ImageTitleContainer>
          {imageTitle}
        </ImageTitleContainer>
      }
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

      {price ?
        <RightContainer listMode={listMode}>
          <PriceContainer>
            <Text color='brand' tag='p' type='xs'>
              {supportingInfo}
            </Text>
            <Price color='brand' tag='p' type='xl' price={price} />
          </PriceContainer>
          <IconContainer listMode={listMode}>
            <Icon width='40px' height='40px' id='Back' color='brand' />
          </IconContainer>
        </RightContainer>

        :null}

    </MainInfoContainer>


  </Container>
}
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
  price:PropTypes.number,
  supportingInfo:PropTypes.string,
  subtitle:PropTypes.string,
  title:PropTypes.string,
  target:PropTypes.string,
  imageTitle: PropTypes.node
}

ProductCard.defaultProps = {
  listMode:false,
}

export default ProductCard;
