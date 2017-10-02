import React from 'react';
import Home from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import HomeWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from './reducer';

const enhace = withState('counter','increment',0);
const HomeWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Home {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/Home', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer
  }))
  .add('Default', () => (
    <HomeWithState></HomeWithState>

  ))

  .add('With data', () => (
    <HomeWithData></HomeWithData>
  ))
