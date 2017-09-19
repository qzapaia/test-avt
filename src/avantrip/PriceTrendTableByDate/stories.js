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

const generateRandomFlightDates = () => {
  
  const today = moment();
  
  const randomDepartureDate = moment(today).add(Math.floor(Math.random() * 15) + 1, 'days').format();
  const randomReturnDate = moment(today).add(Math.floor(Math.random() * 30) + 20, 'days').format();

  const departureDates = getThreeDatesBeforeAndAfter(randomDepartureDate);
  const returnDates = getThreeDatesBeforeAndAfter(randomReturnDate);

  const flightDatesCollection = departureDates.reduce( (acc, d) => {

    return acc.concat(returnDates.map( r => {
      return {
        'vuelta': r, 
        'ida': d,
        'price': Math.floor(Math.random() * 20000) + 5000
      }
    }))

  }, [])

  return flightDatesCollection;
}

const PriceTrendTableByDateWithState =  enhace((props) => {
  const { flightDates, selectedReturnDate, selectedDepartureDate} = props;

  const clickHandler = () => {
    //action('click')(counter+1);

  }
  
  return (
    <PriceTrendTableByDate 
      flightDates={flightDates} 
      selectedReturnDate={selectedReturnDate} 
      selectedDepartureDate={selectedDepartureDate}
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
    <PriceTrendTableByDateWithState flightDates={generateRandomFlightDates()}>
    </PriceTrendTableByDateWithState>
  ))

  .add('With data', () => (
    <PriceTrendTableByDateWithData>PriceTrendTableByDateWithData component</PriceTrendTableByDateWithData>
  ))
