import React from 'react';
import Price from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const PriceWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Price {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/Price', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <PriceWithState price={10000}></PriceWithState>
  ))
  .add('Precio con tipo y simbolo', () => (
    <PriceWithState currencySymbol={true} price={10000} type="l"></PriceWithState>
  ))
