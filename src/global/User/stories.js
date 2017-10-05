import React from 'react';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

storiesOf('global/User', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      User: reducer,
    },
  }))
  .add('Default', () => (
    <div>Solo utilizado para acceder al state.</div>
  ))
