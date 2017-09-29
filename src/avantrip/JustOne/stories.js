import React from 'react';
import JustOne from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import { withState, compose } from 'recompose';

const enhace = withState('selected','select');

const Group = JustOne(({select, isSelected})=>(
  <section>
    <h4>Click para elegir</h4>
    <div onClick={select(1)}>
      Opción 1 {isSelected(1)?'seleccionado' : 'no seleccionado'}
    </div>
    <div onClick={select(2)}>
      Opción 2 {isSelected(2)?'seleccionado' : 'no seleccionado'}
    </div>
    <div onClick={select(3)}>
      Opción 3 {isSelected(3)?'seleccionado' : 'no seleccionado'}
    </div>
  </section>
))

const GroupWithState = enhace(Group);

storiesOf('avantrip/JustOne', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <GroupWithState onChange={action('onChange')}  />
  ))
  .add('Default value', () => (
    <GroupWithState defaultValue="3" onChange={action('onChange')} />
  ))
