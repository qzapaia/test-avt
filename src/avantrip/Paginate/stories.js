import React from 'react';
import Paginate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';
import PaginateWithData from './withData';

import theme from '../styled.theme';
import readme from './README.md';

const enhace = withState('currentPage','selectPage', {'value': 0});

const getRandomPagesQty = () => Math.floor(Math.random() * 20);

const generateRandomPages = () => {
  const pq = getRandomPagesQty();

  let pages = [];
  for(var i=1; i<=pq; i++){
    pages.push({
      'value':i
    });
  }
  return pages;
}

const PaginateWithState =  enhace((props) => {
  const { pages, currentPage, selectPage } = props;

  const pageHandler = (currentPage) => {
    action('selectPage')(currentPage);
    selectPage(currentPage);
  }

  if(!currentPage){
    selectPage(pages[0]);
  }

  return (
    <Paginate pages={pages} currentPage={currentPage} onClick={pageHandler} />
  )
})

storiesOf('avantrip/Paginate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <PaginateWithState pages={generateRandomPages()}></PaginateWithState>
  ))

  .add('With data', () => (
    <PaginateWithData>PaginateWithData component</PaginateWithData>
  ))
