import React from 'react'
import Chart from './'
import moment from 'moment'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { withState, compose } from 'recompose'

import { ThemeProvider } from 'styled-components'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);

const data = [];

let date = moment();
for (var i = 0; i < 31; i++) {
  date = date.add(1, 'days');
  data.push({
    name: date.format("DD MMM"),
    price: Math.random() * (20000 - 1000) + 1000
  });
}

const clickHandler = (value) => {
  action('click')(value);
}

storiesOf('avantrip/Chart', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <Chart data={data} value="price" label="name" onClick={clickHandler} />
    </ThemeProvider>
  )))
