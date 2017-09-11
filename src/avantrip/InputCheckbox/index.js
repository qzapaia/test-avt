import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({onChange,value,label,checked, disabled, type}) => (
  <label key ={ value }>
    <input
      id ={ value }
      type = { type }
      value ={ value }
      checked ={ checked }
      onChange ={ e => onChange(e.target.checked) }
      disabled={disabled}
    />
    {label}
  </label>
)

InputCheckbox.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["checkbox", "radio"])
}

InputCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  type: "checkbox"
}

export default InputCheckbox;
