import React from 'react';
import Select from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value','changeSelected',null);
const SelectWithState =  enhace((props) => {
  const { value, changeSelected } = props;

  const changeHandler = (newValue) => {
    action('with state change')(newValue);
    changeSelected(newValue);
  }

  return (
    <Select {...props} value={value} onChange={changeHandler} />
  )
})

storiesOf('global/Select', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <SelectWithState>
      <option value="1">label 1</option>
      <option value="2">label 2</option>
      <option value="3">label 3</option>
    </SelectWithState>
  ))
