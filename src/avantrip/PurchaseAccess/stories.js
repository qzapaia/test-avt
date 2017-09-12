import React from 'react'
import PurchaseAccess from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState, withHandlers, compose } from 'recompose'

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

const enhace = compose()

const PurchaseAccessWithState =  enhace((props) => {
  const { errorMessage } = props;

  const onSubmit = () => {

  }

  return (
    <PurchaseAccess 
      onSubmit={onSubmit} 
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


