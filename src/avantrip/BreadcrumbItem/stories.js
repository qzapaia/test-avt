import React from 'react';
import BreadcrumbItem from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';


storiesOf('avantrip/styled@BreadcrumbItem', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <BreadcrumbItem>
      <a href="https://www.avantrip.com">Avantrip.com</a>
    </BreadcrumbItem>
  ))
