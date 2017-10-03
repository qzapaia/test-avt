import React from 'react'
import Subscribe from './'
import SubscribeWithData from "./withData";

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import generalDecorator from '../../stories.decorator.js';

import reducer from "./reducer";

import theme from '../styled.theme';
import readme from './README.md'

storiesOf('global/Subscribe', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: {
      homeSubscribe: reducer
    }
  }))
  .add('Default', () => (
    <SubscribeWithData
      title="Recibí nuestras últimas ofertas"
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
