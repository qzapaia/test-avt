import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SpecialOffer from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('global/SpecialOffer', module)
  .add('Default', addReadme(() => (
    <SpecialOffer>SpecialOffer component</SpecialOffer>
  )))
