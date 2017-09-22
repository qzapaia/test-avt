import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {Container} from './container.styled';


const TextContent = ({title, subtitle}) => (
  <Container>
    <Text tag='h1' color='darkergray' type="xxl">{title}</Text>
    <Text tag='p' color='darkergray' type="m">
      {subtitle}
    </Text>
  </Container>
)

TextContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

TextContent.defaultProps = {
  title: '',
  subtitle: ''
}

export default TextContent;
