import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({value, label, step, min, max, onChange}) => (
	<div>
		<label>{label}</label>
		<input type="number" min={min} max={max} step={step} value={value} onChange={ e => onChange(e.target.value) }/>
	</div>
)

InputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

InputNumber.defaultProps = {
  
}

export default InputNumber;
