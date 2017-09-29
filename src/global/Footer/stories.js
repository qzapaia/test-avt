import React from 'react';
import Footer from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const FooterWithState =  enhace((props) => {

  return (
    <Footer />
  )
})

storiesOf('global/Footer', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FooterWithState></FooterWithState>
  ))

