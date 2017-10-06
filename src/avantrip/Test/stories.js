import React from 'react';
import Test from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import TestWithData from './withData';

import theme from '../styled.theme';
import readme from '../../global/Test/README.md';
import reducer from "./reducer";

const enhace = withState('counter','increment',0);
const TestWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Test {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/Test', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      Test: reducer,
    },
  }))
  .add('Default', () => (
    <TestWithState></TestWithState>
    
  ))

  .add('With data', () => (
    <TestWithData></TestWithData>
  ))
