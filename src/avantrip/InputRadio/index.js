import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../InputCheckbox';

const InputRadio = (props) => <InputCheckbox {...props} type="radio" />

InputRadio.propTypes = InputCheckbox.propTypes;
InputRadio.defaultProps = InputCheckbox.defaultProps;

export default InputRadio;
