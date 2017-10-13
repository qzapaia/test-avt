import React from 'react';
import Nav from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const pathNames = [
  { id: 'vuelos',   name: 'Vuelos',   url:'http://www.avantrip.com', icon: 'Vuelos'},
  { id: 'hoteles',  name: 'Hoteles',  url:'http://www.avantrip.com', icon: 'Hotel'},
  { id: 'autos',    name: 'Autos',    url:'http://www.avantrip.com', icon: 'Autos'},
  { id: 'pasesesdisney', name: 'Pases Disney', url:'http://www.avantrip.com', icon: 'PasesDisney'}
];

storiesOf('global/styled@Nav', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Nav currentPathname="/vuelos/">
      {pathNames.map(path =>
          <span id={path.id} icon={path.icon} href={path.url}>{path.name}</span>
      )}
    </Nav>
  ))
