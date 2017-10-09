import React from 'react';
import Header from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';
import purchaseAccessReducer from '../PurchaseAccess/reducer';

storiesOf('avantrip/Header', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: {
      purchaseAccess:purchaseAccessReducer
    }
  }))
  .add('Default', () => (
    <Header
      phoneText="0810-222-2826"
      currentPathname="/vuelos/"/>
  ))
