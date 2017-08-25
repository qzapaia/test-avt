import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import OffersLinkList from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('vuelos/OffersLinkList', module)
  .add('Default', addReadme(() => (
    <OffersLinkList>OffersLinkList component</OffersLinkList>
  )))
