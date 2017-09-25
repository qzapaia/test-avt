import React from 'react';
import InputDate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = compose(
  withState('dates','onChange',null),
);

const InputDateWithState =  enhace((props) => {
  const { dates, onChange } = props;

  const changeHandler = (val) => {
    action('change')(val);
    onChange(val);
  }

  return (
    <InputDate {...props} label="Fecha" onChange={changeHandler} />
  )
})

storiesOf('avantrip/InputDate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('SingleDate', () => (
    <InputDateWithState
      placeholder="Fecha"
    />
  ))
  .add('SingleDate con tres mes', () => (
    <InputDateWithState
      placeholder="Fecha"
      numberOfMonths={3}
    />
  ))
  .add('SingleDate entre el 1 de enero y el 28 de enero del 2018', () => (
    <InputDateWithState
      placeholder="Fecha"
      min="2018-01-01"
      max="2018-01-28"
    />
  ))
  .add('Rango de fechas', () => (
    <InputDateWithState
      range={true}
    />
  ))
  .add('Rango de fechas - Entre el 1 de enero y el 28 de enero del 2018', () => (
    <InputDateWithState
      min="2018-01-01"
      max="2018-01-28"
      range={true}
    />
  ))
