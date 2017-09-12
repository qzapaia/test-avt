import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import InputCheckbox from '../InputCheckbox';

const CheckboxesGroup = ({options, onChange, label, values}) => (
  <span>
    {label}
    {options.map(option => (
      <InputCheckbox
        key={ option.value }
        id={ option.value.toString() }
        type ="checkbox"
        label ={ option.label }
        checked ={ values.indexOf(option.value) > -1 }
        onChange ={ checked => onChange({
          'value': option.value,
          'checked': checked
        })}
      />
    ))}
  </span>
)

CheckboxesGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.node,
    values: PropTypes.array
}

CheckboxesGroup.defaultProps = {
  options: []
}

export default CheckboxesGroup;
