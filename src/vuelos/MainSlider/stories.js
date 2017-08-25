import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import MainSlider from './'


import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

storiesOf('vuelos/MainSlider', module)
  .add('Default', addReadme(() => (
    <MainSlider>MainSlider component</MainSlider>
  )))
