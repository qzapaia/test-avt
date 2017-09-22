import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
console.log(Text);
const TextContent = ({title, subtitle}) => (
  <div>
    <h1>
      <Text type="xxl">{title}</Text>
    </h1>
    <Text type="m">
    	{subtitle}
    </Text>
  </div>
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
