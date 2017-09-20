import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({
											value,
											label,
											step,
											min,
											max,
											onChange}) => (
	<label>
		<span>{label}</span>
		<input
			type="number"
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={e => onChange(parseFloat(e.target.value))}
		/>
	</label>
)

InputNumber.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  step: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
}

InputNumber.defaultProps = {

}

export default InputNumber;
