import React from 'react';
import UserNav from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const UserNavWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <UserNav {...props} />
  )
})

const logoutCallback = (e) => {
  e.preventDefault();
  console.log(`Evento`,e);
}

const data = {
  messageNumber : '10',
  userName :      'Mario Monticello',
  points :        '6200',
  quoteId :       '9999999'
}

storiesOf('quiero/UserNav', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <UserNav
      qvUserData = { data }
      onLogout = { logoutCallback }>
    </UserNav>
  ))
