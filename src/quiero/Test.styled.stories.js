import React from 'react';
import { storiesOf } from '@storybook/react';

import Test from './Test.styled'

storiesOf('quiero/Test', module)
  .add('Default', () => (
    <Test>Test component</Test>
  ))
