import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Text from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('vuelos/Text', module)
  .add('Default', addReadme(() => (
    <Text>Lorem ipsum dolor sit amet (s size)</Text>
  )))
  .add('m', addReadme(() => (
    <Text size='m'>Lorem ipsum dolor sit amet (m size)</Text>
  )))
  .add('l', addReadme(() => (
    <Text size='l'>Lorem ipsum dolor sit amet (l size)</Text>
  )))
