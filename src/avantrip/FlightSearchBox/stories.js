import React from 'react';
import FlightSearchBox from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import { defaultsDeep } from 'lodash';

const enhace = withState('values','changeValues',{leg:'1',amountTraveller:{adults:'1'},class:'1'});
const FlightSearchBoxWithState =  enhace((props) => {
  const { changeValues, values } = props;

  const searchHandler = (values) => {
    action('click')(values);
  }

  const changeHandler = (newValues) => {
    defaultsDeep(newValues, values);
    action('Change Value')(JSON.stringify(newValues));
    changeValues(newValues);
  }

  return (
    <FlightSearchBox 
      title='busca tu vuelo'
      onChange={changeHandler}
      onSearch={searchHandler}
      values={values}
    />
  )
})

storiesOf('avantrip/FlightSearchBox', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <FlightSearchBoxWithState></FlightSearchBoxWithState>
  ))

