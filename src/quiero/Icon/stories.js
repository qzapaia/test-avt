import React from 'react';
import Icon from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import generalDecorator from '../../stories.decorator.js';
import { map } from 'lodash';

import theme from '../../avantrip/styled.theme';
import readme from '../../avantrip/Icon/README.md';
import * as SVGS from '../../avantrip/Icon/imports.js';

const PlaceholderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`

storiesOf('quiero/Icon', module)
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
