import React from 'react';
import Header from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import ContactAndPhoneInfo from '../ContactAndPhoneInfo';

storiesOf('avantrip/styled@Header', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Header>
      <div>Logo</div>
      <ContactAndPhoneInfo />
      <div>Nav</div>
    </Header>
  ))
