import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button'

storiesOf('quiero/Button', module)
  .add('Default', () => (
    <Button>Button component</Button>
  ))
