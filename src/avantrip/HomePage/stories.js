import React from 'react';
import HomePage from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import HomePageWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "./reducer";


storiesOf('avantrip/HomePage', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
  .add('Default', () => (
    <HomePage></HomePage>
  ))
