import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import HomePage from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('vuelos/HomePage', module)
  .add('Default', addReadme(() => (
    <HomePage>HomePage component</HomePage>
  )))
