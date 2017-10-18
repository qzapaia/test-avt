import React from 'react';
import PropTypes from 'prop-types';
import {RadioGroupContainer} from './styled';

import InputCheckbox from '../InputCheckbox';

const RadioGroup = ({options, onChange, label, value, direction}) => (
  <div>
    {label}
    <RadioGroupContainer direction={direction}>
      {options.map(option => (
          <InputCheckbox
            key={ option.value }
            id={ option.value }
            type ="radio"
            label ={ option.label }
            checked={value == option.value}
            onChange ={ e => onChange(option.value) }
          />
      ))}
    </RadioGroupContainer>
  </div>
)

RadioGroup.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.node,
  value: PropTypes.string,
  direction: PropTypes.string
}

RadioGroup.defaultProps = {
  options: [],
  direction: 'row'
}

export default RadioGroup;
