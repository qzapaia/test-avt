import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Footer from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/Footer', module)
  .add('Default', addReadme(() => (
    <Footer>Footer component</Footer>
  )))
