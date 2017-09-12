import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({onChange, id, label, checked, disabled, type}) => (
  <label key ={ id }>
    <input
      type = { type }
      checked ={ checked }
      onChange ={ e => onChange(e.target.checked) }
      disabled={disabled} />
    {label}
  </label>
)

InputCheckbox.propTypes = {
  id: PropTypes.string,
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
