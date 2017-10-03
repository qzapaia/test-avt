import React from 'react';
import FeaturedDeals from './';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';
import FeaturedDealsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

storiesOf('global/FeaturedDeals', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FeaturedDeals />
  ))

  .add('With data', () => (
    <FeaturedDealsWithData></FeaturedDealsWithData>
  ))
