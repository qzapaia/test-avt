import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from '../InputNumber';

const handleChange = (onChange, onChangeKeyvalue) => option => value => {
  onChange({
    id:option.id,
    value:value
  });

  onChangeKeyvalue({ [option.id]:value });
};

const NumberGroup = ({
  options,
  onChange,
  onChangeKeyvalue,
  label,
}) => (

  <span>
    {label && <h4>{label}</h4>}
    {options.map(option => (
      <InputNumber
        {...option}
        onChange ={handleChange(onChange,onChangeKeyvalue)(option)}
      />
    ))}
  </span>

)

NumberGroup.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onChangeKeyvalue: PropTypes.func,
}

NumberGroup.defaultProps = {
  options:[],
  onChange: ()=>{},
  onChangeKeyvalue: ()=>{},
}

export default NumberGroup;
