import React from 'react';
import CheckoutItemsDetail from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const stages = [{
  leg: 'IDA',
  duration: '19 hs 10 m',
  stops: '1 escala',
  flights: [
    {
      marketingCarrier: {
        name: "LATAM Airlines",
        logo: 'https://cdn.avantrip.com/static/images/airlines-icons/LA.png'
      },
      number: 456,
      class: 'Economica',
      departure: {
        airportCode: 'AEP',
        location: 'Buenos Aires',
        date: 'Sáb 18 Nov De 2017',
        hour: '12:45 hs'
      },
      arrival: {
        airportCode: 'SCL',
        location: 'Santiago',
        date: 'Sáb 18 Nov De 2017',
        hour: '15:45 hs'
      },
      stopTime: '8hs 10m'
    },
    {
      marketingCarrier: {
        name: "LATAM Airlines",
        logo: 'https://cdn.avantrip.com/static/images/airlines-icons/LA.png'
      },
      number: 500,
      class: 'Economica',
      departure: {
        airportCode: 'SCL',
        location: 'Santiago',
        date: 'Sáb 18 Nov De 2017',
        hour: '23:20 hs'
      },
      arrival: {
        airportCode: 'MIA',
        location: 'Miami',
        date: 'Dom 19 Nov De 2017',
        hour: '05:55 hs'
      }
    }
  ]
},
{
  leg: 'VUELTA',
  duration: '19 hs 10 m',
  stops: 'Directo',
  flights: [
    {
      marketingCarrier: {
        name: "LATAM Airlines",
        logo: 'https://cdn.avantrip.com/static/images/airlines-icons/LA.png'
      },
      number: 7823,
      class: 'Economica',
      departure: {
        airportCode: 'MIA',
        location: 'Miami',
        date: 'Sáb 25 Nov De 2017',
        hour: '19:55 hs'
      },
      arrival: {
        airportCode: 'EZE',
        location: 'Buenos Aires',
        date: 'Dom 26 Nov De 2017',
        hour: '06:45 hs'
      }
    }
  ]
}];

const enhace = withState('counter','increment',0);
const CheckoutItemsDetailWithState =  enhace((props) => {
  return (
    // cambiar stages por items
    <CheckoutItemsDetail stages={stages} />
  )
})

storiesOf('avantrip/CheckoutItemsDetail', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <CheckoutItemsDetailWithState></CheckoutItemsDetailWithState>
  ))

