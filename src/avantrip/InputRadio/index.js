import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ id, onChange, value, name, checked, label }) => (
      <label key ={ id }>
        <input
          id ={ id }
          type ="radio"
          name ={ name }
          value ={ value }
          checked ={ checked }
          onChange ={ e => onChange(e.target.value) }
        />
        {label}
      </label>
)

InputRadio.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func
}

InputRadio.defaultProps = {
  checked: false
}

export default InputRadio;
