import React from 'react';
import Session from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const SessionWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Session {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('quiero/Session', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <Session
    messageNumber = "5"
    userName = "Mario Monticello"
    points = "6200"
    quoteLink = "/messages/1234567"
    >
    </Session>
  ))
