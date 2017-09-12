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
            value ={ option.value.toString() }
            label ={ option.label }
            checked ={ value == option.value }
            onChange ={ e => onChange(option.value.toString()) }
          />
    ))}
  </span>
)

RadiosGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.node,
    value: PropTypes.string
}

export default RadiosGroup;
