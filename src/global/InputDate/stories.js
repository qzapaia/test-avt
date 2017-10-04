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
  const {
    dates,
    onChange,
    forceDatesFormat } = props;

  const changeHandler = (val) => {
    const newValue = forceDatesFormat ? val.startDate : val;
    action('change')(newValue);
    onChange(newValue);
  }

  return (
    <InputDate {...props} label="Fecha" onChange={changeHandler} />
  )
})

storiesOf('global/InputDate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('SingleDate', () => (
    <InputDateWithState
      placeholder="Fecha"
    />
  ))
  .add('SingleDate con formato objeto en el format', () => (
    <InputDateWithState
      placeholder="Fecha"
      forceDatesFormat={true}
    />
  ))
  .add('SingleDate entre el 1 de enero y el 28 de enero del 2018', () => (
    <InputDateWithState
      placeholder="Fecha"
      min="2018-01-01"
      max="2018-01-28"
    />
  ))
  .add('SingleDate después del 1 de enero del 2018', () => (
    <InputDateWithState
      placeholder="Fecha"
      min="2018-01-01"
    />
  ))
  .add('SingleDate antes del 31 de diciembre del 2017', () => (
    <InputDateWithState
      placeholder="Fecha"
      max="2017-12-31"
    />
  ))
  .add('SingleDate con tres meses', () => (
    <InputDateWithState
      placeholder="Fecha"
      numberOfMonths={3}
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
