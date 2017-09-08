import React from 'react';
import Select from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const SelectWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Select {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/Select', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <SelectWithState></SelectWithState>
  ))

