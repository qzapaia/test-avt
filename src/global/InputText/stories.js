import React from 'react';
import InputText from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value','change','');
const InputTextWithState =  enhace((props) => {
  const { value, change } = props;

  const changeHandler = (newVal) => {
    action('change')(newVal);
    change(newVal);
  }

  return (
    <InputText {...props} value={value} onChange={changeHandler} />
  )
})

storiesOf('global/InputText', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default (Cualquier valor)', () => (
    <InputTextWithState
      icon="Add"
      label="Nombre:"
    >
    </InputTextWithState>
  ))
  .add('Cualquier valor (con sugerencia)', () => (
    <InputTextWithState label="Nombre:">
      <option value="a">la opción a</option>
      <option value="b">la opción b</option>
    </InputTextWithState>
  ))
  .add('Default (Requiere elegir de la lista)', () => (
    <InputTextWithState
      icon="Add"
      requiresExistingValue={true}
      label="Nombre:"
    >
      <option value="a">la opción a</option>
      <option value="b">la opción b</option>
    </InputTextWithState>
  ))
