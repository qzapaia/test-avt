import React from 'react';
import PropTypes from 'prop-types';
import SuggestionPanel from './SuggestionPanel';
import { pick } from 'lodash';
import Icon from '../Icon';
const handleChange = () => e => onChange(e.target.value);

const InputText = ({
  onChange,
  value,
  label,
  options,
  requiresExistingValue,
  iconName,
  children,
}) => (
  <label>
    <h4>{label}</h4>
    <div>
      <Icon id={iconName}></Icon>
      <input
        type="text"
        value={value}
        onChange={handleChange(onChange)}
      />
    </div>
    <SuggestionPanel onChange={onChange} children={children} />
  </label>
)

InputText.propTypes = {
  onChange:PropTypes.func,
  value:PropTypes.string,
  label:PropTypes.string,

  options:PropTypes.arr,
  requiresExistingValue:PropTypes.node,

  iconName:PropTypes.node,
}

InputText.defaultProps = {
  value:'',
  requiresExistingValue:false
}

export default InputText;
