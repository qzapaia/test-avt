import React from 'react';
import Link from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';


storiesOf('avantrip/Link', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Link>Link component</Link>
  ))
  .add('Con el href a https://www.avantrip.com/vuelos', () => (
    <Link href="https://www.avantrip.com/vuelos">Vuelos</Link>
  ))
  .add('Con un icono TODO', () => (
    <Link icon={<span>Usar Componente Icon</span>}>Vuelos</Link>
  ))
  .add('Con target _blank', () => (
    <Link target="_blank">Link _blank</Link>
  ))
