import React from 'react';
import Home from './withData';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from './reducer';
import MainLayout from '../MainLayout/withData';

storiesOf('avantrip/Home', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
  .add('Default', () => (
    <MainLayout>
      <Home />
    </MainLayout>
  ));
