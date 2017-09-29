import React from 'react';
import Icon from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState, compose } from 'recompose';
import styled from 'styled-components';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';

import * as SVGS from './imports.js';

import {map} from 'lodash';

const PlaceholderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`

storiesOf('global/Icon', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <div>
      {map(SVGS,(s,k)=>(
        <PlaceholderItem>
          <Icon id={k} size="l"></Icon> {k} 
        </PlaceholderItem>
      ))}
    </div>
  ))
