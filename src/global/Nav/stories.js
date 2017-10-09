import React from 'react';
import Nav from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';


storiesOf('global/styled@Nav', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Nav currentPathname="/vuelos/">
      <span id="vuelos" href="http://www.avantrip.com">Vuelos</span>
      <span id="hoteles" href="http://www.avantrip.com">Hoteles</span>
      <span id="autos" href="http://www.avantrip.com">Autos</span>
      <span id="disney" href="http://www.avantrip.com">Disney</span>
    </Nav>
  ))
