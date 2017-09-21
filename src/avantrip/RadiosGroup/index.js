import React from 'react';
import PropTypes from 'prop-types';

import InputCheckbox from '../InputCheckbox';

const RadiosGroup = ({options, onChange, label, value}) => (
  <span>
    {label}
    {options.map(option => (
          <InputCheckbox
            key={ option.value }
            id={ option.value.toString() }
            type ="radio"
            label ={ option.label }
            checked ={ value == option.value.toString() }
            onChange ={ e => onChange(option.value) }
          />
    ))}
  </span>
)

RadiosGroup.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    label: PropTypes.node,
    value: PropTypes.string
}

RadiosGroup.defaultProps = {
  options: []
}

export default RadiosGroup;
