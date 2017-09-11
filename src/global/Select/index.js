import React from 'react';
import PropTypes from 'prop-types';

const Select = ({onChange, value, children}) => (
  <select onChange={e=>onChange(e.target.value)} value={value}>
    {children}
  </select>
)

Select.propTypes = {
  onChange: PropTypes.func
}

export default Select;
