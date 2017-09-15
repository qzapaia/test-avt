import React from 'react';
import CheckoutBillingInfo from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import CheckoutBillingInfoWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);

const CheckoutBillingInfoWithState =  enhace((props) => {
  const { counter, increment } = props;

  return (
    <CheckoutBillingInfo />
  )
})

storiesOf('avantrip/CheckoutBillingInfo', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CheckoutBillingInfoWithState></CheckoutBillingInfoWithState>
  ))

  .add('With data', () => (
    <CheckoutBillingInfoWithData>CheckoutBillingInfoWithData component</CheckoutBillingInfoWithData>
  ))
