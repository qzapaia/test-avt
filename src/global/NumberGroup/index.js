import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from '../InputNumber';

const handleChange = (onChange, onChangeKeyValue) => option => value => {
  onChange({
    id:option.id,
    value:value
  });

  onChangeKeyValue({ [option.id]:value });
};

const NumberGroup = ({
  options,
  onChange,
  onChangeKeyValue,
  label,
}) => (

  <span>
    {label && <h4>{label}</h4>}
    {options.map(option => (
      <InputNumber
        {...option}
        onChange ={handleChange(onChange,onChangeKeyValue)(option)}
      />
    ))}
  </span>

)

NumberGroup.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onChangeKeyValue: PropTypes.func,
}

NumberGroup.defaultProps = {
  options:[],
  onChange: ()=>{},
  onChangeKeyValue: ()=>{},
}

export default NumberGroup;
