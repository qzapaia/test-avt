import React from 'react';
import PropTypes from 'prop-types';

import InputCheckbox from '../InputCheckbox';

const CheckboxGroup = ({allOptions, options, onChange, onClear, label, values}) => {
  return <span>
    {label}
    {allOptions &&
      <InputCheckbox
        key="allOption"
        id="all"
        type ="checkbox"
        label ={ allOptions.label }
        checked ={ values.length == 0 }
        onChange ={ onClear }
      />
    }
    {options.map(option => (
      <InputCheckbox
        key={ option.value }
        id={ option.value.toString() }
        type ="checkbox"
        label ={ option.label }
        checked ={ values.includes(option.value) }
        onChange ={ checked => onChange({
            'value': option.value,
            'checked': checked
          })}
      />
    ))}
  </span>
}

CheckboxGroup.propTypes = {
    allOptions: PropTypes.object,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    onChangeAllOptions: PropTypes.func,
    label: PropTypes.node,
    values: PropTypes.array
}

CheckboxGroup.defaultProps = {
  options: []
}

export default CheckboxGroup;
