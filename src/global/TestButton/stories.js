import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import TestButton from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/TestButton', module)
  .add('Default', addReadme(() => (
    <TestButton>TestButton component</TestButton>
  )))
