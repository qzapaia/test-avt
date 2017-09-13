import React from 'react';
import Breadcrumb from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

storiesOf('avantrip/Breadcrumb', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Breadcrumb>
      <a href="https://www.avantrip.com">Avantrip.com</a>
      <a href="https://www.avantrip.com/vuelos">Vuelos</a>
      <span>
        304 vuelos a Miami desde Buenos Aires
      </span>
    </Breadcrumb>
  ))
