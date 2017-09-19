import React from 'react';
import CheckoutFareDetail from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const infoWithAllTypePassenger = {
  'adult': {
    'unitPrice': 12802,
    'quantity': 2,
  },
  'children': {
    'unitPrice': 12024,
    'quantity': 2,
  },
  'babies': {
    'unitPrice': 311,
    'quantity': 2,
  },
  'taxes': 14633,
  'charges': 0,
  'priceWithoutInterest': 64.907,
  'interest': {
    'TEA': 5.24,
    'CFT': 6.46,
    'value': 4271
  },
  'finalPrice': 69.177
}
const infoWithAdultPassengerOnly = {
  'adult': {
    'unitPrice': 126.878,
    'quantity': 2,
  },
  'taxes': 22315,
  'charges': 35889,
  'priceWithoutInterest': 311960,
  'interest': {
    'TEA': 0,
    'CFT': 0,
    'value': 0
  },
  'finalPrice': 311960
}

storiesOf('avantrip/CheckoutFareDetail', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Solo adultos', () => (
    <CheckoutFareDetail
      currency="ARS"
      detailInfo={infoWithAdultPassengerOnly} />
    ))
  .add('Con todos los tipos de pasajeros', () => (
    <CheckoutFareDetail
      currency="ARS"
      detailInfo={infoWithAllTypePassenger} />
  ))
  .add('Con últimos lugares', () => (
    <CheckoutFareDetail
      lastPlaces="9"
      currency="ARS"
      detailInfo={infoWithAdultPassengerOnly} />
  ))
