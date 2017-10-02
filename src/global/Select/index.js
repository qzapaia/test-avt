import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import {SelectContainer} from './styled'
import selectCSS from 'react-select/dist/react-select.css';
import { injectGlobal } from "styled-components";
injectGlobal`${selectCSS}`;

const Select = (props) => {
  const {
    placeholder,
    name,
    options,
    onChange,
    value
  } = props;

  return (
    <ReactSelect
      {...props}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      options={options}
    />
  )
}
Select.propTypes = {
  onChange: PropTypes.func
}

Select.defaultProps = {
  searchable:false
}


export default Select;
