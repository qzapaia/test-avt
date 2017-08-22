import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchResultWithFilters from './SearchResultWithFilters'
import SearchResultWithFiltersWithData from './SearchResultWithFiltersWithData'
import { Provider } from './apollo-client'

storiesOf('vuelos/SearchResultWithFilters', module)
  .add('Default', () => (
    <SearchResultWithFilters>SearchResultWithFilters component</SearchResultWithFilters>
  ))
  .add('With data', () => (
    <Provider>
      <SearchResultWithFiltersWithData>SearchResultWithFiltersWithData component</SearchResultWithFiltersWithData>
    </Provider>
  ))
