import React from 'react'
import PurchaseAccess from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState, withHandlers, compose } from 'recompose'

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

const enhace = compose(
  withState('errorMessage','showPurchaseError', ''),
  withState('submitState','changeSubmitState', '')
)

const PurchaseAccessWithState =  enhace((props) => {
  const { errorMessage, showPurchaseError, 
          submitState, changeSubmitState, 
          stateForTesting } = props;

  const onSubmit = () => {
    if(stateForTesting == 'fail'){
      changeSubmitState('fail');
      showPurchaseError('No se ha encontrado una compra asociada. Por favor ingresá tus datos de nuevo.');
    }
  }

  return (
    <PurchaseAccess 
      onSubmit={onSubmit} 
      state={submitState}
      errorMessage={errorMessage}/>
  )
})

storiesOf('avantrip/PurchaseAccess', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Success', () => (
    <PurchaseAccessWithState stateForTesting="success" />
  ))
  .add('Fail', () => (
    <PurchaseAccessWithState stateForTesting="fail" />
  ))


