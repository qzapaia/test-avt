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
  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <SearchResultsList {...props} clusters={clusters} onClick={clickHandler} />
  )
})
let search = {
  origin: "BUE",
  destination: "COR",
  departureDate: "12-03-2018",
  returningDate: "22-03-2018",
  passengers: {
    adults: 1,
    children: 1,
    infants:0
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
