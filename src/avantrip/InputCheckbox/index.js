import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({id,onChange,name,label,checked}) => (
  <label key ={ id }>
    <input
      id ={ id }
      type ="checkbox"
      name ={ name }
      checked ={ checked }
      onChange ={ e => onChange(e.target.checked) }
    />
    {label}
  </label>
)

InputCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func
}

InputCheckbox.defaultProps = {
  checked: false
}

export default InputCheckbox;
