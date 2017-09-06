import React from 'react';
import PropTypes from 'prop-types';

const {{componentName}} = ({text, onClick}) => (
  <div onClick={onClick}>
    {{componentName}} component
    <br/>
    Counter {text}
    <br/>
    <strong>Click to increment</strong>
  </div>
)

{{componentName}}.propTypes = {
  text: PropTypes.string.isRequired
}

{{componentName}}.defaultProps = {
  text:''
}

export default {{componentName}};
