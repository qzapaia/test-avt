import React from 'react';
import MainLayout from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import MainLayoutWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "./reducer";


storiesOf('avantrip/MainLayout', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
  .add('Default', () => (
    <MainLayout></MainLayout>
  ))
  // .add('With data', () => (
  //   <MainLayoutWithData></MainLayoutWithData>
  // ))
