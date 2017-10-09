import React from 'react';
import FlightsFilters from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';
import FlightsFiltersWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "./reducer";

const options = {
  scales:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  },
  airlines:[
    {
      value:'1',
      label: 'una escala'
    },
    {
      value:'2',
      label: 'dos escala'
    }
  ],
  schedules:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  },
  airports:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    },
    1: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escala'
        }
      ]
    }
  }
}

let search = {
  origin: 'BUE',
  destination: 'COR',
  departureDate: '11-03-2018',
  returningDate: '20-03-2018',
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP'
}

storiesOf('avantrip/FlightsFilters', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      flightsFilters: reducer,
    },
  }))
  .add('Default', () => (
    <FlightsFiltersWithData 
      origin={search.origin}
      destination={search.destination}
      departureDate={search.departureDate}
      returningDate={search.returningDate}
      passengersAdults={search.passengers.adults}
      passengersChildren= {search.passengers.children}
      passengersInfants={search.passengers.infants}
      cabinClass={search.cabinClass}
      channel={search.channel}
      portal={search.portal}
    
    />
  ))

  .add('With data', () => (
    <FlightsFiltersWithData
      origin={search.origin}
      destination={search.destination}
      departureDate={search.departureDate}
      returningDate={search.returningDate}
      passengersAdults={search.passengers.adults}
      passengersChildren= {search.passengers.children}
      passengersInfants={search.passengers.infants}
      cabinClass={search.cabinClass}
      channel={search.channel}
      portal={search.portal}
      />
  ))
