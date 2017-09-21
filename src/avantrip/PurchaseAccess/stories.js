import React from 'react'
import PurchaseAccess from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState, withHandlers, mapProps ,compose } from 'recompose'

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

import { defaultsDeep } from 'lodash';

const enhace = compose(
  withState('formValue','updateFormValue', {'purchaseId':'', 'purchaseEmail':''})
)
const PurchaseAccessWithState =  enhace((props) => {
  const { errorMessage, formValue, updateFormValue} = props;

  const onSubmit = () => {
    action('submitForm')(formValue);
  }

  const onChange = (value) => {
    defaultsDeep(value, formValue);
    updateFormValue(value);
  }

  return (
    <PurchaseAccess 
      value={formValue}
      onSubmit={onSubmit} 
      onChange={onChange}
      errorMessage={errorMessage}/>
  )
})

storiesOf('avantrip/PurchaseAccess', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Success', () => (
    <PurchaseAccessWithState />
  ))
  .add('Fail', () => (
    <PurchaseAccessWithState errorMessage="No se ha encontrado una compra asociada. Por favor ingresá tus datos de nuevo." />
  ))


