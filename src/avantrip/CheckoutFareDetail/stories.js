import React from 'react';
import CheckoutFareDetail from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import Text from '../Text';

const infoWithAllTypePassenger = {
  'referencePrice': 12802,
  'items': [{
    'label': '2 Adultos',
    'price': 25604
  },{
    'label': '2 Niños',
    'price': 24048
  },{
    'label': '2 Bebés',
    'price': 622
  }],
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
  'referencePrice': 126878,
  'items': [{
    'label': '2 Adultos',
    'price': 253756,
  }],
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

const modeClustes = {
  'referencePrice': 12802,
  'items': [{
    'label': '2 Adultos',
    'price': 25604
  },{
    'label': '2 Niños',
    'price': 24048
  },{
    'label': '2 Bebés',
    'price': 622
  }],
  'taxes': 14633,
  'charges': 0,
  'priceWithoutInterest': 64.907,
  'finalPrice': 69.177
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
      title={<Text>Últimos 9 lugares</Text>}
      currency="ARS"
      detailInfo={infoWithAdultPassengerOnly} />
  ))
  .add('Modo Cluster', () => (
    <CheckoutFareDetail
      currency="ARS"
      detailInfo={modeClustes} />
  ))
