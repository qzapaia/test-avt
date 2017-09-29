import React from 'react';
import FlightClusterRouteOption from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const flights = {
  "airline": "JJ",
  "airlineName": "LATAM Airlines",
  "operatorAirline": "LH",
  "operatorAirlineName": "Lufthansa",
  "duration": 1140,

  "flights": [
    {
      "airline": "JJ",
      "airlineName": "LATAM Airlines",
      "seatingType":"Económica",
      "flightNumber":"8080",

      "departureAirport": "AEP",
      "departureAirportName": "Jorge Newbery",
      "departureCity": "Buenos Aires",
      "departureDate": 1505939480986,

      "arrivalAirport": "GRU",
      "arrivalAirportName": "Aerop. Guarulhos",
      "arrivalCity": "San Pablo",
      "arrivalDate": 1505939480986,

      "connectionTime":90
    },
    {
      "airline": "JJ",
      "airlineName": "LATAM Airlines",
      "seatingType":"Económica",
      "flightNumber":"8080",

      "departureAirport": "GRU",
      "departureAirportName": "Aerop. Guarulhos",
      "departureCity": "San Pablo",
      "departureDate": 1505939480986,

      "arrivalAirport": "FRA",
      "arrivalAirportName": "Intl. de Frankfurt",
      "arrivalCity": "Frankfurt",
      "arrivalDate": 1505939480986,


      "connectionTime":80
    }
  ]
}

const enhace = withState('counter','increment',0);
const FlightClusterRouteOptionWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <FlightClusterRouteOption {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('global/FlightClusterRouteOption', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FlightClusterRouteOptionWithState
      flights={flights}
    />
  ))
