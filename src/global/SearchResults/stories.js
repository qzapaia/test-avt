import React from 'react';
import SearchResults from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import SearchResultsWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';
import reducer from "./reducer";

const enhace = withState('counter','increment',0);
const SearchResultsWithState =  enhace((props) => {
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <SearchResults {...props} text={counter} onClick={clickHandler} />
  )
})

storiesOf('global/SearchResults', module)
  .addDecorator(generalDecorator({
    readme,
    theme,
    reducer:{
      SearchResults: reducer,
    },
  }))
  .add('Default', () => (
    <SearchResultsWithState></SearchResultsWithState>
    
  ))

  .add('With data', () => (
    <SearchResultsWithData></SearchResultsWithData>
  ))
