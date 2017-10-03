import React from 'react';
import FlightCluster from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import FlightClusterWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const enhace = compose(
  withState('counter','increment',0),
)

const FlightClusterWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  let cluster = {};
  cluster.additionalInfo = '¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!'
  cluster.disclaimerText = '¿Qué incluye el precio?'
  cluster.routes = [];
  cluster.fareDetail = {
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
    'finalPrice': 69.177
  }

  const flightSample1 = {
    departure:{
      iata:'EZE',
      date: new Date(),
      city:'Buenos Aires',
      airport:'Ministro Pistarini'
    },
    arrival:{
      iata:'ATL',
      date:new Date(),
      city:'Atlanta',
      airport:'Aerop. Intl. Hartsfield Jackson'
    },
    common:{
      flightStep:1,
      flightNumber:'DA110',
      airlineLogo: 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/CM.png?adq-20170927-0',
      provider:'Delta Air Lines',
      class:'Económica',
    }
  }

  const flightSample2 = {
    departure:{
      iata:'ATL',
      date:new Date(),
      city:'Atlanta',
      airport:'Aerop. Intl. Hartsfield Jackson'
    },
    arrival:{
      iata:'MIA',
      date:new Date(),
      city:'Miami',
      airport:'Intl. de Miami'
    },
    common:{
      flightStep:2,
      flightNumber:'DA120',
      airlineLogo: 'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/CM.png?adq-20170927-0',
      provider:'Delta Air Lines',
      class:'Económica',
    }
  }

  const sampleRouteOption1 = {
    'summaryInfo': {
      'id':123456,
      'airlineLogos':[
        'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/CM.png?adq-20170927-0',
        'https://cdn.avantrip.com/vuelos-desktop/bundles/avantripflight/images/ui/airlines/Z8.png?adq-20170927-0'
      ],
      'provider':'Operado por Air St Thomas',
      'departureIata':'EZE',
      'departureDate': new Date(),
      'arrivalIata':'MIA',
      'arrivalDate': new Date(),
      'scalesText': '1 Escala',
      'totalTime': new Date()
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

  const sampleRoute1 = {
    'header': {
      title:'IDA',
      departureCity: 'Buenos Aires',
      arrivalCity: 'Nueva York',
      date:new Date()
    },
    'options':[sampleRouteOption1]
  }

  const sampleRoute2 = {
    'header': {
      title:'VUELTA',
      departureCity: 'Nueva York',
      arrivalCity: 'Buenos Aires',
      date:new Date()
    },
    'options':[sampleRouteOption1]
  }

  cluster.routes.push(sampleRoute1);
  cluster.routes.push(sampleRoute2);

  return (
    <FlightCluster {...props}  
      onClick={clickHandler} 
      data={cluster}
    />
  )
})

storiesOf('global/FlightCluster', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      FlightCluster: reducer,
    },
  }))
  .add('Default', () => (
    <FlightClusterWithState></FlightClusterWithState>
    
  ))
  /*
  .add('With data', () => (
    <FlightClusterWithData></FlightClusterWithData>
  ))
  */
