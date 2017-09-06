import React from 'react';
import PropTypes from 'prop-types';

const {{componentName}} = ({text, onClick}) => (
  <div onClick={onClick}>
    {{componentName}} component
    <br/>
    Counter {text}
  </div>
)

{{componentName}}.propTypes = {
  text: PropTypes.string.isRequired
}

{{componentName}}.defaultProps = {
  text:''
}

export default {{componentName}};
