import React from 'react';
import InputRadio from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('isChecked','onchange',false);
const InputRadioWithState =  enhace((props) => {
  const { isChecked, onchange } = props;

  const onChangeHandler = (isCheckedValue) => {
    action('onchange')(isCheckedValue);
    onchange(isCheckedValue);
  }

  return (
    <InputRadio {...props}
      checked={isChecked}
      onChange={onChangeHandler} />
  )
})

storiesOf('avantrip/InputRadio', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputRadioWithState></InputRadioWithState>
  ))
