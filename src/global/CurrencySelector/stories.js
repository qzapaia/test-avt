import React from 'react';
import CurrencySelector from './';
import CurrencySelectorWithData from './withData';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";



let initialOptions = [{
  value: "ARS",
  label: "ARS"
},
{
  value: "USD",
  label: "USD"
},
{
  value: "REAL",
  label: "REAL"
}];


storiesOf('global/CurrencySelector', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      currency: reducer,
    }
  }))
  .add('Default', () => (
    <CurrencySelectorWithData 
      options={initialOptions}    />
  ))

