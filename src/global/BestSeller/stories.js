import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import BestSeller from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/BestSeller', module)
  .add('Default', addReadme(() => (
    <BestSeller>BestSeller component</BestSeller>
  )))
