import React from 'react';
import PriceTrendCalendar from './';
import moment from 'moment';

import withReadme from 'storybook-readme/with-readme';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withState, compose } from 'recompose';

import { ThemeProvider } from 'styled-components';

import theme from '../styled.theme';
import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose

const data = [];

let date = moment();
for (var i = 0; i < 31; i++) {
  date = date.add(1, 'days');
  data.push({
    name: date.format("DD MMM"),
    price: Math.random() * (20000 - 1000) + 1000
  });
}

const enhace = withState('counter','increment',data);
const PriceTrendCalendarWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { counter, increment } = props;

  return (
    <PriceTrendCalendar {...props} />
  )
})

const clickHandler = (value) => {
  action('click')(value);
}

storiesOf('avantrip/PriceTrendCalendar', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <PriceTrendCalendarWithState data={data} onClick={clickHandler}/>
    </ThemeProvider>
  )))
