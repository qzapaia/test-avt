import React from 'react';
import InputDate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = compose(
  withState('dates','onChange',{}),
  withState('focused','onFocus',false),
);
const InputDateWithState =  enhace((props) => {
  const { dates, onChange } = props;

  const changeHandler = (val) => {
    action('change')(val);
    onChange(val);
  }

  return (
    <InputDate {...props} onChange={changeHandler} />
  )
})

storiesOf('avantrip/InputDate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <InputDateWithState></InputDateWithState>
  ))
