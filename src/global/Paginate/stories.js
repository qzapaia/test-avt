import React from 'react';
import Paginate from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PaginateWithData from "./withData";

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import reducer from "./reducer";

import { random } from 'lodash';

const randomPagesCount = random(20);

storiesOf('global/Paginate', module)
  .addDecorator(
    generalDecorator({
      readme,
      theme,
      reducer: {
        paginate: reducer
      }
    })
  )
  .add('Default', () => (
    <PaginateWithData pagesCount={randomPagesCount} ></PaginateWithData>
  ))

