import React from 'react';
import CheckoutBillingInfo from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import CheckoutBillingInfoWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

import { defaultsDeep } from 'lodash';

const enhace = compose(
  withState('formValue','updateFormValue', {
    'name':'', 
    'lastName':'',
    'email':'',
    'phoneType':'',
    'phoneNumber':'',
    'postalCode':''
  })
)

const CheckoutBillingInfoWithState =  enhace((props) => {
  const { errorMessage, formValue, updateFormValue} = props;

  const onChange = (value) => {
    defaultsDeep(value, formValue);
    updateFormValue(value);
    action('data')(formValue);
  }

  return (
    <CheckoutBillingInfo
      value={formValue}
      onChange={onChange}
      errorMessage={errorMessage}
    />
  )
})

storiesOf('global/CheckoutBillingInfo', module)
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
