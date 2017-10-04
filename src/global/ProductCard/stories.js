import React from 'react';
import ProductCard from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import Text from '../Text';
import Icon from '../Icon';

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

storiesOf('global/ProductCard', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <ProductCard
      href="http://www.google.com"
      media="https://ofdoge.files.wordpress.com/2013/11/plane.jpg"
      //coinType ???
      price={15250}
      supportingInfo="Precio desde"
      subtitle="Ida y vuelta"
      title="Miameee"
    ></ProductCard>
  ))
  .add('List Mode true', () => (
    <ProductCard
      href="http://www.google.com"
      media="https://ofdoge.files.wordpress.com/2013/11/plane.jpg"
      price={150}
      supportingInfo="Precio desde"
      subtitle="Ida y vuelta"
      title="Miameeeee"
      href="http://www.google.com"
      listMode={true}
    ></ProductCard>
  ))
  .add('Con un titulo de imagen', () => (
    <ProductCard
      href="http://www.google.com"
      media="https://ofdoge.files.wordpress.com/2013/11/plane.jpg"
      price={15250}
      supportingInfo="Precio desde"
      subtitle="Ida y vuelta"
      title="Miameee"
      imageTitle={<div>
        <Icon
          height="m"
          id="Vuelos"/>
        <Text type="m">
          Volando con American Airlines
        </Text>
      </div>
      }
    ></ProductCard>
  ))
