import React from 'react';
import PropTypes from 'prop-types';

const TextContent = ({title, subtitle}) => (
  <div>
    <div>
    	{title}
    </div>
    <div>
    	{subtitle}
    </div>
  </div>
)

TextContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

TextContent.defaultProps = {
  title: 'Título',
  subtitle: 'Descripción'
}

export default TextContent;
