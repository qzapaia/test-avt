import React from 'react';
import BreadcrumbSeparator from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';


storiesOf('avantrip/styled@BreadcrumbSeparator', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <BreadcrumbSeparator />
  ))
