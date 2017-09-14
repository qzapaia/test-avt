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

storiesOf('avantrip/InputText', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputTextWithState icon="Add">
      <option value="la opción a">a</option>
      <option value="la opción b">b</option>
    </InputTextWithState>
  ))
