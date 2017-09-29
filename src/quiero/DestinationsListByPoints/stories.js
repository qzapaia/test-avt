import React from 'react';
import DestinationsListByPoints from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

const children = [];
for (var i = 0; i < 10; i++) {
  children.push(<div key={i} id={i}>Children {i}</div>);
}

storiesOf('quiero/DestinationsListByPoints', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Vista tipo lista', () => {
    return (
      <DestinationsListByPoints type="list" region="Argentina">
        {children}
      </DestinationsListByPoints>
  )})
