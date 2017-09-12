import React from 'react';
import PropTypes from 'prop-types';

const TextContent = ({title, subtitle}) => (
  <div>
    <h1>
    	{title}
    </h1>
    <h2>
    	{subtitle}
    </h2>
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
