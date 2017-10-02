import React from 'react';
import SearchResultsPlaceHolder from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

storiesOf('global/SearchResultsPlaceHolder', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <SearchResultsPlaceHolder />
  ))
