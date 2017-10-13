import React from 'react';
import Nav from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const pathNames = [
  { id: 'vuelos',   name: 'Vuelos',   url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'hoteles',  name: 'Hoteles',  url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'paquetes', name: 'Paquetes',    url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'autos',    name: 'Autos',    url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'pasesesdisney', name: 'Pases Disney', url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'cruceros',    name: 'Cruceros',    url:'https://www.quieroviajes.avantrip.com/', icon: ''},
  { id: 'eminent',    name: 'Exlusivo Eminent',    url:'https://www.quieroviajes.avantrip.com/', icon: ''},
];


storiesOf('quiero/styled@Nav', module)
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
  .add('Con currentPathname igual a /hoteles/', () => (
    <Nav currentPathname="/hoteles/">
    {pathNames.map(path =>
        <span id={path.id} icon={path.icon} href={path.url}>{path.name}</span>
    )}
    </Nav>
  ))
