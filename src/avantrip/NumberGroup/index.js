import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from '../InputNumber';

const handleChange = onChange => option => value => {
  onChange({
    id:option.id,
    value:value
  });
}

const NumberGroup = ({
                      options,
                      onChange,
                      label,
                    }) => (
  <span>
    {label && <h4>{label}</h4>}
    {options.map(option => (
      <InputNumber
        {...option}
        onChange ={handleChange(onChange)(option)}
      />
    ))}
  </span>
)

NumberGroup.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string
}

NumberGroup.defaultProps = {
  options:[]
}

export default NumberGroup;
