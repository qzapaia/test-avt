import React from 'react';
import List from './';

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

storiesOf('quiero/List', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Vista tipo lista', () => {
    return (<List type="list">
      {children}
    </List>
  )})
  .add('Vista tipo grilla', () => (
    <List type="grid">
      {children}
    </List>
  ))
