import React from 'react';
import SearchResultsList from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import SearchResultsListWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const enhace = withState('counter','increment',0);

const SearchResultsListWithState =  enhace((props) => {
  const { counter, increment } = props;
  const clusters = [];
  const clickHandler = (selectedOptions) => {
    action('click')(selectedOptions);
  }

  return (
    <SearchResultsList {...props} clusters={clusters} onBuy={clickHandler} />
  )
})
let search = {
  origin: "BUE",
  destination: "BER",
  departureDate: "03-01-2018",
  returningDate: "31-01-2018",
  passengers: {
    adults: 2,
    children: 1,
    infants:1
  },
  cabinClass: "Economy",
  channel: "DESKTOP",
  portal:"AVANTRIP"
}

storiesOf('global/SearchResultsList', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      SearchResultsList: reducer,
    },
  }))
  .add('Default', () => (
    <SearchResultsListWithState></SearchResultsListWithState>
    
  ))
  .add('With data', () => (
    <SearchResultsListWithData
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
