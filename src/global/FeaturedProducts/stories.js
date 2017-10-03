import React from 'react';
import FeaturedProducts from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import FeaturedProductsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const mockPromotionalFlights = [{
  "media":
    "https://static.avantrip.com/fkt-flight/images/img-cluster-miami.jpg",
  "imageTitle": "Volando con American Airlines",
  "title": "Miami",
  "subtitle": "Ida y vuelta",
  "currency": "ARS",
  "supportingInfo": "Precio desde",
  "price": "14.755",
  "href": "https://www.avantrip.com/oportunidades/vuelos-miami"
},{
  "media":
    "https://static.avantrip.com/fkt-flight/images/img-cluster-madrid.jpg",
  "imageTitle": "Volando con Latam",
  "title": "Madrid",
  "subtitle": "Ida y vuelta",
  "currency": "ARS",
  "supportingInfo": "Precio desde",
  "price": "16.713",
  "href": "https://www.avantrip.com/oportunidades/vuelos-madrid"
}]

const enhace = withState('counter','increment',0);
const FeaturedProductsWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <FeaturedProducts {...props} />
  )
})

storiesOf('global/FeaturedProducts', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      FeaturedProducts: reducer,
    },
  }))
  .add('Default', () => (
    <FeaturedProducts {...props}
      products={mockPromotionalFlights}
      />
  ))

  .add('Promoción de viajes desde API', () => (
    <FeaturedProductsWithData
      type="promotionalFlights"
    />
  ))

  .add('Más vendidos desde API', () => (
    <FeaturedProductsWithData
      type="bestSellers"
      listMode={true}
    />
  ))
