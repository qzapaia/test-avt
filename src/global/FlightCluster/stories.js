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

import { defaultsDeep } from 'lodash'

const generateCluster = () => {
  let cluster = {};
  cluster.additionalInfo = '¡Hasta 12 cuotas sin interés con Visa y Master del Banco Francés!'
  cluster.disclaimerText = '¿Qué incluye el precio?'
  cluster.routes = {};
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
      'totalTime': new Date(),
      'isSelected':false
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

  const sampleRouteOption2 = {
    'summaryInfo': {
      'id':123,
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
      'totalTime': new Date(),
      'isSelected':false
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

  const sampleRouteOption3 = {
    'summaryInfo': {
      'id':12,
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
      'totalTime': new Date(),
      'isSelected':false
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

    const sampleRouteOption4 = {
    'summaryInfo': {
      'id':4567,
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
      'totalTime': new Date(),
      'isSelected':false
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

    const sampleRouteOption5 = {
    'summaryInfo': {
      'id':888,
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
      'totalTime': new Date(),
      'isSelected':false
    },
    'extendedInfo': {
      'header':'Buenos Aires hacia Miami',
      'flights':[flightSample1, flightSample2]
    }
  }

    const sampleRouteOption6 = {
    'summaryInfo': {
      'id':999,
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
      'totalTime': new Date(),
      'isSelected':false
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
    'options':[sampleRouteOption1,sampleRouteOption2]
  }

  const sampleRoute2 = {
    'header': {
      title:'VUELTA',
      departureCity: 'Nueva York',
      arrivalCity: 'Buenos Aires',
      date:new Date()
    },
    'options':[sampleRouteOption3]
  }

  const sampleRoute3 = {
    'header': {
      title:'Tramo 3',
      departureCity: 'Nueva York',
      arrivalCity: 'Buenos Aires',
      date:new Date()
    },
    'options':[sampleRouteOption4,sampleRouteOption5,sampleRouteOption6]
  }


  cluster.routes.first = sampleRoute1;
  cluster.routes.second = sampleRoute2;
  cluster.routes.third = sampleRoute3;

  return cluster;
} 

const enhace = compose(
  withState('cluster','selectRoute', generateCluster()),
  withState('selectedOptions','selectRouteOption', 
    {
      firstRouteOptionId:123,
      secondRouteOptionId:12,
      thirdRouteOptionId:4567
    }
  )
)

const FlightClusterWithState = enhace((props) => {
  const { cluster, selectRoute, selectedOptions, selectRouteOption } = props;

  const onCheckout = () => {
    console.log('ON CHECKOUT');
  }

  const onSelectedRouteOption = (selectedOption) => {
    const clonedOptions = {};
    defaultsDeep(clonedOptions, selectedOptions);

    clonedOptions.firstRouteOptionId = selectedOption.firstRouteOptionId || clonedOptions.firstRouteOptionId;
    clonedOptions.secondRouteOptionId = selectedOption.secondRouteOptionId || clonedOptions.secondRouteOptionId;
    clonedOptions.thirdRouteOptionId = selectedOption.thirdRouteOptionId || clonedOptions.thirdRouteOptionId;

    selectRouteOption(clonedOptions);
  }

  return (
    <FlightCluster {...props}
      onCheckout={onCheckout}
      selectRouteOptions={selectedOptions}
      onSelectedRouteOption={onSelectedRouteOption}
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
