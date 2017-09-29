import React from 'react'
import Subscribe from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withState, compose } from 'recompose'

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

storiesOf('global/Subscribe', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Subscribe
      title="Recibí nuestras últimas ofertas"
      onSubscribe={action('subscribe sent')}
    />
  ))
  .add('Successful subscription', () => (
    <Subscribe
      title="Recibí nuestras últimas ofertas"
      state="success"
    />
  ))
  .add('Failed subscription', () => (
    <Subscribe
      title="Recibí nuestras últimas ofertas"
      state="error"
    />
  ))
