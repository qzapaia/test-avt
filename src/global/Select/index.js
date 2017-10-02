import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import {SelectContainer} from './styled'
import selectCSS from 'react-select/dist/react-select.css';
import { injectGlobal } from "styled-components";
injectGlobal`${selectCSS}`;

const Select = (props) => {
  const {
    name,
    placeholder,
    options,
    onChange,
    value,
    searchable,
    clearable
  } = props;

  return (
    <SelectContainer>
      <ReactSelect
        {...props}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        options={options}
        searchable={searchable}
        clearable={clearable}
      />
    </SelectContainer>
  )
}
Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.object,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,

}

Select.defaultProps = {
  searchable:false,
  clearable:false,
  noResultsText:'No se encontraron resultados'
}


export default Select;
