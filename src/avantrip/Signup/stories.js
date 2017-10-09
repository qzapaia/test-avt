import React from 'react';
import SignupWithData from './withData';

import { storiesOf } from '@storybook/react';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "../../global/User/reducer";

storiesOf('avantrip/Signup', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer: {
      user: reducer
    }
  }))
  .add('With data', () => (
    <SignupWithData />
  ))
