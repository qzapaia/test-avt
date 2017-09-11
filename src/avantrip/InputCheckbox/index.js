import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({id,onChange,name,label,checked, disabled}) => (
  <label key ={ id }>
    <input
      id ={ id }
      type ="checkbox"
      name ={ name }
      checked ={ checked }
      onChange ={ e => onChange(e.target.checked) }
      disabled={disabled}
    />
    {label}
  </label>
)

InputCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

InputCheckbox.defaultProps = {
  checked: false,
  disabled: false
}

export default InputCheckbox;
