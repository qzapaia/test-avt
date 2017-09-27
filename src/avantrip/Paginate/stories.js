import React from 'react';
import Paginate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import { random } from 'lodash';

const enhace = withState('currentPage','selectPage', 5);

const PaginateWithState =  enhace((props) => {
  const { pagesQty, currentPage, selectPage } = props;

  const pageHandler = (currentPage) => {
    action('selectPage')(currentPage);
    selectPage(currentPage);
  }

  return (
    <Paginate pagesQty={pagesQty} currentPage={currentPage} onPageSelected={pageHandler} />
  )

})

storiesOf('avantrip/Paginate', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <PaginateWithState pagesQty={random(20)}></PaginateWithState>
  ))

