import React from 'react';
import PropTypes from 'prop-types';

const {{componentName}} = ({text='{{componentName}} component'}) => (
  <div>{text}</div>
)

{{componentName}}.propTypes = {
  text: PropTypes.string.isRequired
}

export default {{componentName}};
