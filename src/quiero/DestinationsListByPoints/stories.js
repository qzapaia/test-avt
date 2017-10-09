import React from 'react';
import DestinationsListByPoints from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const destinosArgentina = [
  {destinoNombre: "Bahia Blanca", rango: 4000, rangoBusiness: 10000},
  {destinoNombre: "Bariloche", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Calafate", rango: 4000, rangoBusiness: 25000},
  {destinoNombre: "Mendoza", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Formosa", rango: 4000, rangoBusiness: 15000},
  {destinoNombre: "Jujuy", rango: 4000 }
];

const destinosArgentinaNoBusiness = [
  {destinoNombre: "Bahia Blanca", rango: 1000},
  {destinoNombre: "Bariloche", rango: 2000},
  {destinoNombre: "Calafate", rango: 3000},
  {destinoNombre: "Mendoza", rango: 4000},
  {destinoNombre: "Formosa", rango: 5000},
  {destinoNombre: "Jujuy", rango: 6000 }
];


storiesOf('quiero/DestinationsListByPoints', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Vista tipo lista Argentina', () => {
    return (
      <DestinationsListByPoints
        region="Argentina"
        destinations={ destinosArgentina }
      />
  )})
  .add('Vista tipo lista Argentina sin clase Business', () => {
    return (
      <DestinationsListByPoints
        region="Argentina"
        destinations={ destinosArgentinaNoBusiness }
      />
  )})
