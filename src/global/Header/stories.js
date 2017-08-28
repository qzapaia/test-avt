import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Header from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/Header', module)
  .add('Default', addReadme(() => (
    <Header>Header component</Header>
  )))
