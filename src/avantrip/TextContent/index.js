import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import {Container} from './container.styled';


const TextContent = ({title, subtitle}) => (
  <Container>
    <h1>
      <Text type="xxl">{title}</Text>
    </h1>
    <p>
      <Text type="m">
        {subtitle}
      </Text>
    </p>
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
