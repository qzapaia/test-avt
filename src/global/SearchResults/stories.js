import React from 'react';
import SearchResults from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';
import SearchResultsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

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
  destination: 'DME',
  departureDate: '01-05-2018',
  passengers: {
    adults: 1,
    children: 1,
    infants:1
  },
  cabinClass: 'Economy',
  channel: 'DESKTOP',
  portal:'AVANTRIP',
  leg:"oneway",
}

const searchMultiTrip = {
  origin: ["BUE","BUE","BUE"],
  destination: ["MOW","PEK","MEL"],
  departureDate: ["10-01-2018","17-01-2018","25-01-2018"],
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

let searchRoundtrip = {
  origin: ["BUE"],
  destination: ["MIA"],
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
  leg:"roundtrip",
}

storiesOf('global/SearchResults', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
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
      origin={searchRoundtrip.origin}
      destination={searchRoundtrip.destination}
      departureDate={searchRoundtrip.departureDate}
      returningDate={searchRoundtrip.returningDate}
      passengersAdults={searchRoundtrip.passengers.adults}
      passengersChildren= {searchRoundtrip.passengers.children}
      passengersInfants={searchRoundtrip.passengers.infants}
      cabinClass={searchRoundtrip.cabinClass}
      channel={searchRoundtrip.channel}
      portal={searchRoundtrip.portal}
      leg={searchRoundtrip.leg}
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
  ));
