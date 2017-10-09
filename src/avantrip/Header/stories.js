import React from 'react';
import Header from './withData';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from './reducer';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';

storiesOf('avantrip/Header', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: reducer
  }))
  .add('Default', () => (
    <Header
      phoneText="0810-222-2826"
      currentPathname="/vuelos/"/>
  ))
