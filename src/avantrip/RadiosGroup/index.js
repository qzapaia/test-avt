import React from 'react';
import PropTypes from 'prop-types';

import InputRadio from '../InputRadio';

const RadiosGroup = ({options, onChange, label, selectedOption}) => (
  <span>
    {label}
    {options.map(c => (
          <InputRadio
            key={ c.key }
            id={ c.key.toString() }
            name ={ "radio"+c.key }
            type ="radio"
            value ={ c.key.toString() }
            label ={ c.label }
            checked ={ selectedOption == c.key }
            onChange ={ e => onChange(c.key) }
          />
    ))}
  </span>
)

RadiosGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.node,
    selectedOption: PropTypes.number
}

export default RadiosGroup;
