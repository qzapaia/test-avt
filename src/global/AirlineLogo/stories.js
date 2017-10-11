import React from 'react';
import AirlineLogo from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

storiesOf('global/AirlineLogo', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
  }))
  .add('Logo de American Airline', () => (
    <AirlineLogo code="AA"/>
  ))
  .add('Logo con ancho 48px y largo 40px', () => (
    <AirlineLogo code="AA" height="40px" width="48px"/>
  ))
