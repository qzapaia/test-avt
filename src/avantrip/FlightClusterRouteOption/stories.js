import React from 'react';
import FlightClusterRouteOption from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('counter','increment',0);
const FlightClusterRouteOptionWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <FlightClusterRouteOption {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('avantrip/FlightClusterRouteOption', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FlightClusterRouteOptionWithState></FlightClusterRouteOptionWithState>
  ))

