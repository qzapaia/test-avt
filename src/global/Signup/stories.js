import React from 'react';
import Signup from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const SignupWithState =  enhace((props) => {
  const { counter, increment } = props;

  const handleFacebookSignup = () => {
    action('click')('Facebook Login');
  }

  return (
    <Signup onFacebookSignup={handleFacebookSignup}/>
  )
})

storiesOf('global/Signup', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <SignupWithState></SignupWithState>
  ))

