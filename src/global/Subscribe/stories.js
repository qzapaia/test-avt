import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Subscribe from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/Subscribe', module)
  .add('Default', addReadme(() => (
    <Subscribe>Subscribe component</Subscribe>
  )))
