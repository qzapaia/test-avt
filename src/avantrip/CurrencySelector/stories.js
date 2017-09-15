import React from 'react';
import CurrencySelector from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value','changeCurrency','1');

let initialOptions = [{
  value: 1,
  label: "ARS",
  isLast: false
},
{
  value: 2,
  label: "USD",
  isLast: false
},
{
  value: 3,
  label: "REAL",
  isLast: true
}];


const CurrencySelectorWithState =  enhace((props) => {
  const { value, changeCurrency } = props;

  const onClickHandler = (value) => {
    action('Change Currency')('Selected Option: ' + value);
    changeCurrency(value);
  }

  return (
    <CurrencySelector 
      options={initialOptions} 
      onClick={onClickHandler} 
      value={value} 
    />
  )
})

storiesOf('avantrip/CurrencySelector', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CurrencySelectorWithState></CurrencySelectorWithState>
  ))

