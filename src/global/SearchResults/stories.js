import React from 'react';
import SearchResults from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import SearchResultsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const enhace = withState('counter','increment',0);

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
  portal:'AVANTRIP',
  leg:"oneway",
}

let searchOneWay = {
  origin: 'BUE',
  destination: 'COR',
  departureDate: '11-03-2018',
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP',
  leg:"oneway",
}

const searchMultiTrip = {
  origin: ["BUE","COR","MDZ"],
  destination: ["COR","MDZ","BUE"],
  departureDate: ["10-03-2018","17-03-2018","25-03-2018"],
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: "Economy",
  channel: "desktop",
  portal: "Avantrip",
  leg:"multitrip",
}

let multiTripSearch = {
  origin: ["BUE","MIA","LHR"],
  destination: ["MIA","LHR","DME"],
  departureDate: ["10-01-2018","17-01-2018","25-01-2018"],
  passengers: {
    adults: 1,
    children: 0,
    infants:0
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP',
  leg:"multitrip",
}

const SearchResultsWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <SearchResults {...props} text={counter} onClick={clickHandler} />
  )
})

const newFilters = {
  scales:{
    0: {
      options:[
        {
          value:'1',
          label: 'una escala'
        },
        {
          value:'2',
          label: 'dos escalas'
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
          label: 'dos escalas'
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
      label: 'dos escalas'
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
          label: 'dos escalas'
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
          label: 'dos escalas'
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
          label: 'dos escalas'
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
          label: 'dos escalas'
        }
      ]
    }
  }
}
const newclusters = [{},{}];
storiesOf('global/SearchResults', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
  .add('Default', () => (
    <SearchResults 
      showItemsByPage={20}
      filters={newFilters} 
      clusters={newclusters}/>
  ))
  .add('oneway', () => (
    <SearchResultsWithData
      origin={searchOneWay.origin}
      destination={searchOneWay.destination}
      departureDate={searchOneWay.departureDate}
      passengersAdults={searchOneWay.passengers.adults}
      passengersChildren= {searchOneWay.passengers.children}
      passengersInfants={searchOneWay.passengers.infants}
      cabinClass={searchOneWay.cabinClass}
      channel={searchOneWay.channel}
      portal={searchOneWay.portal}
      leg={searchOneWay.leg} 
      showItemsByPage={50}/>
  ))
  .add('roundtrip', () => (
    <SearchResultsWithData
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
      leg={search.leg} 
      showItemsByPage={50}/>
  ))
  .add('Multitrip', () => (
    <SearchResultsWithData
      origin={searchMultiTrip.origin}
      destination={searchMultiTrip.destination}
      departureDate={searchMultiTrip.departureDate}
      passengersAdults={searchMultiTrip.passengers.adults}
      passengersChildren= {searchMultiTrip.passengers.children}
      passengersInfants={searchMultiTrip.passengers.infants}
      cabinClass={searchMultiTrip.cabinClass}
      channel={searchMultiTrip.channel}
      portal={searchMultiTrip.portal}
      leg={searchMultiTrip.leg} 
      showItemsByPage={50}/>
  ))
  .add('With multi trip data', () => (
    <SearchResultsWithData
      origin={multiTripSearch.origin}
      destination={multiTripSearch.destination}
      departureDate={multiTripSearch.departureDate}
      passengersAdults={multiTripSearch.passengers.adults}
      passengersChildren= {multiTripSearch.passengers.children}
      passengersInfants={multiTripSearch.passengers.infants}
      cabinClass={multiTripSearch.cabinClass}
      channel={multiTripSearch.channel}
      portal={multiTripSearch.portal}
      leg={multiTripSearch.leg} 
      showItemsByPage={20}/>
  ))
