import React from 'react';
import ProductCard from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const ProductCardWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <ProductCard {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/ProductCard', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <ProductCard
      href="http://www.google.com"
      media="http://lorempixel.com/200/200/cats/"
      price="150"
      supportingInfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      subtitle="Que tal?"
      title="Hola"
    ></ProductCard>
  ))
  .add('List Mode true', () => (
    <ProductCard
      href="http://www.google.com"
      media="http://lorempixel.com/200/200/cats/"
      price="150"
      supportingInfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
      subtitle="Que tal?"
      title="Hola"
      href="http://www.google.com"
      listMode={true}
    ></ProductCard>
  ))
