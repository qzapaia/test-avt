import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button'

storiesOf('global/Button', module)
  .add('Basic', () => (
    <Button />
  ))
