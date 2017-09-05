import React from 'react';
import PropTypes from 'prop-types';

const {{componentName}} = ({text, onClick}) => (
  <div onClick={onClick}>{text}</div>
)

{{componentName}}.propTypes = {
  text: PropTypes.string.isRequired
}

{{componentName}}.defaultProps = {
  text:'{{componentName}} component'
}

export default {{componentName}};
