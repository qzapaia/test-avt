import React from 'react';
import InputNumber from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value', 'changeValue', '0');

const InputNumberWithState =  enhace((props) => {
  const {
    value,
    label,
    step,
    min,
    max,
    changeValue
  } = props;

  const changeHandler = (newValue) => {
    action('Change InputNumber');
    changeValue(newValue);
  }

  return (
    <InputNumber
      value={value}
      label={label}
      step={step}
      min={min}
      max={max}
      onChange={changeHandler}
    />
  )
})

storiesOf('avantrip/InputNumber', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputNumberWithState
      label="Edad"
      step="1"
      min="0"
      max="100" 
    />
  ))
