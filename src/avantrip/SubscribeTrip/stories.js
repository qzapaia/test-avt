import React from 'react'
import SubscribeTrip from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState, compose } from 'recompose'

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

const city = "Miami";

storiesOf('avantrip/SubscribeTrip', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <SubscribeTrip
      city={city}
      onSubscribe={action('subscribe sent')}
    />
  ))
  .add('Successful subscription', () => (
    <SubscribeTrip
      city={city}
      title={`Te avisamos cuando tengamos los precios más bajos a ${city}.`}
      state="success"
      onSubscribe={action('subscribe sent')}
    />
  ))
  .add('Failed subscription', () => (
    <SubscribeTrip
      city={city}
      title={`Te avisamos cuando tengamos los precios más bajos a ${city}.`}
      state="error"
      onSubscribe={action('subscribe sent')}
    />
  ))
