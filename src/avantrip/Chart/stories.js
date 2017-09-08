import React from 'react'
import Chart from './'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { withState, compose } from 'recompose'

import { ThemeProvider } from 'styled-components'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);

const data = [
    {name: 'Ju 1', price: 14000},
    {name: 'Vi 2', price: 13000},
    {name: 'Sa 3', price: 12000},
    {name: 'Do 4', price: 12780},
    {name: 'Lu 5', price: 11890},
    {name: 'Ma 6', price: 12390},
    {name: 'Mi 7', price: 13490},
    {name: 'Ju 1', price: 14000},
    {name: 'Vi 2', price: 13000},
    {name: 'Sa 3', price: 12000},
    {name: 'Do 4', price: 12780},
    {name: 'Lu 5', price: 11890},
    {name: 'Ma 6', price: 12390},
    {name: 'Mi 7', price: 13490},
    {name: 'Ju 1', price: 14000},
    {name: 'Vi 2', price: 13000},
    {name: 'Sa 3', price: 12000},
    {name: 'Do 4', price: 12780},
    {name: 'Lu 5', price: 11890},
    {name: 'Ma 6', price: 12390},
    {name: 'Mi 7', price: 13490},
    {name: 'Ju 1', price: 14000},
    {name: 'Vi 2', price: 13000},
    {name: 'Sa 3', price: 12000},
    {name: 'Do 4', price: 12780},
    {name: 'Lu 5', price: 11890},
    {name: 'Ma 6', price: 12390},
    {name: 'Mi 7', price: 13490},
    {name: 'Ju 1', price: 14000},
    {name: 'Vi 2', price: 13000},
    {name: 'Sa 3', price: 12000}
];

const clickHandler = (value) => {
  action('click')(value);
}

storiesOf('avantrip/Chart', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <Chart data={data} keyValue="price" keyName="name" onClick={clickHandler} />
    </ThemeProvider>
  )))
