import React from 'react';
import { storiesOf } from '@storybook/react';

import Roque from './Roque.styled'

storiesOf('global/Roque', module)
  .add('Basic', () => (
    <Roque>Roque component</Roque>
  ))
