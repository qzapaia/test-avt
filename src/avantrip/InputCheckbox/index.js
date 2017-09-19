import React from 'react';
import PropTypes from 'prop-types';
import {InputCheckboxContainer, InputStyle, Input} from './container.styled';

const InputCheckbox = ({onChange, id, label, checked, disabled, type}) => (
  <InputCheckboxContainer>
    <label key ={ id }>
      <Input
        type = { type }
        checked ={ checked }
        onChange ={ e => onChange(e.target.checked) }
        disabled={disabled} />
      {label}
      <InputStyle />
    </label>
  </InputCheckboxContainer>
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
