import React from 'react';
import Select from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('value','changeSelected', 'default');
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
    <SelectWithState
      name='hola'
      value='sdsdfsdf'
      placeholder='Hola soy un select'
      options={[{value: 'one', label: 'Uno'}, {value: 'two', label: 'Dos'}]}
    />
  ))

  .add('With search and reset', () => (
    <SelectWithState
      name='hola'
      value='sdsdfsdf'
      placeholder='Hola soy un select con search y clearable'
      searchable={true}
      clearable={true}
      options={[{value: 'one', label: 'Uno'}, {value: 'two', label: 'Dos'}]}
    />
  ))
