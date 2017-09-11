import React from 'react';
import InputCheckbox from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('isChecked','onchange',false);
const enhaceTrue = withState('isChecked','onchange',true);
const createComp = (props) => {
  const { isChecked, onchange } = props;

  const onChangeHandler = (isCheckedValue) => {
    action('onchange')(isCheckedValue);
    onchange(isCheckedValue);
  }

  return (
    <InputCheckbox {...props}
      checked={isChecked}
      onChange={onChangeHandler} />
  )
}

const InputCheckboxWithState =  enhace(createComp)
const InputCheckboxWithStateTrue =  enhaceTrue(createComp)

storiesOf('avantrip/InputCheckbox', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputCheckboxWithState />
  ))
  .add('Con un label configurado', () => (
    <InputCheckboxWithState
      label = {<span>Checkbox Label</span>}
      />
  ))
  .add('Checkeado', () => (
    <InputCheckboxWithStateTrue />
  ))
  .add('Deshabilitado', () => (
    <InputCheckboxWithState
      disabled={true}
      label = {<span>Checkbox Deshabilitado</span>}/>
  ))
