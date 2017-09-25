import React from 'react';

import PriceTrendCalendar from './';
import PriceTrendCalendarWithData from './withData';

import moment from 'moment';

import withReadme from 'storybook-readme/with-readme';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withState, compose } from 'recompose';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from './reducer';

import generalDecorator from '../../stories.decorator.js';

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose

const data = [];

let date = moment();
for (var i = 0; i < 31; i++) {
  date = date.add(1, 'days');
  data.push({
    label: date.format("DD MMM"),
    price: Math.random() * (20000 - 1000) + 1000
  });
}

const enhace = compose(
  withState('counter','increment',data),
  withState('selectedMonth','onChangeMonth',data)
);

const clickHandler = value => {
  action('click')(value);
}

const changeHandler = value => {
  action('change')(value);
  onChangeMonth(value);
}

const PriceTrendCalendarWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { counter, increment, selectedMonth, onChangeMonth } = props;

  return (
    <PriceTrendCalendar
      {...props}
      selectedMonth={selectedMonth}
      onClick={clickHandler}
      onChange={changeHandler} />
  )
})

storiesOf('avantrip/PriceTrendCalendar', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: {
      histogram: reducer
    }
  }))
  .add('Default', addReadme(() => (
    <PriceTrendCalendarWithState data={data} onClick={clickHandler}/>
  )))
  .add('WithData', addReadme(() => (
    <PriceTrendCalendarWithData
      origin="BUE"
      destination="MIA"
      dateTo="2017-10-08"
      dateFrom="2017-10-01"
      adults="2"
      children="0"
      babies="0"
      minDepartureMonthYear="2017-09"
      maxDepartureMonthYear="2018-09"
      minDepartureDate="2017-09-24"
      maxDepartureDate="2018-09-22" />
  )))
