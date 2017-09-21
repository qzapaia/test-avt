import React from 'react';
import PriceTrendTableByDate from './';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import PriceTrendTableByDateWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);

const getThreeDatesBeforeAndAfter = (date) => {
  let dates = [];

  dates.push(moment(date).subtract(3, 'days').format());
  dates.push(moment(date).subtract(2, 'days').format());
  dates.push(moment(date).subtract(1, 'days').format());
  dates.push(moment(date).format());
  dates.push(moment(date).add(1, 'days').format());
  dates.push(moment(date).add(2, 'days').format());
  dates.push(moment(date).add(3, 'days').format());

  return dates;
}

const genererateDepartureDate = (today) => today.add(Math.floor(Math.random() * 15) + 1, 'days').format();

const genererateArrivalDate = (today) => today.add(Math.floor(Math.random() * 30) + 20, 'days').format();

const generateRandomFlightDates = (departureDates, arrivalDates) => (
  departureDates.reduce( (acc, d) => (
    acc.concat(arrivalDates.map( r => ({
      'vuelta': r, 
      'ida': d,
      'price': Math.floor(Math.random() * 30000) + 11000
    })))
  ), [])
)

const PriceTrendTableByDateWithState =  enhace((props) => {
  const { flightDates, selectedArrivalDate, selectedDepartureDate} = props;

  const clickHandler = (selectedFlight) => {
    action('click')(selectedFlight);
  }

  const today = moment();
  const departureDate = genererateDepartureDate(today);
  const arrivalDate = genererateArrivalDate(today);

  const randomFlightDates = 
    generateRandomFlightDates(
      getThreeDatesBeforeAndAfter(departureDate), 
      getThreeDatesBeforeAndAfter(arrivalDate)
    )

  return (
    <PriceTrendTableByDate 
      flightDates={randomFlightDates} 
      selectedArrivalDate={arrivalDate} 
      selectedDepartureDate={departureDate}
      onClick={clickHandler}
    />
  )
})

storiesOf('avantrip/PriceTrendTableByDate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <PriceTrendTableByDateWithState>
    </PriceTrendTableByDateWithState>
  ))

  .add('With data', () => (
    <PriceTrendTableByDateWithData>PriceTrendTableByDateWithData component</PriceTrendTableByDateWithData>
  ))