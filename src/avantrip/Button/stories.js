import React from 'react';
import Button from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md';
import styled from 'styled-components';

const Sep = styled.div`
  padding: 10px;
`


storiesOf('avantrip/styled@Button', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <div>
      <Sep>
        <Button type="cta">cta button</Button>
      </Sep>
      <Sep>
        <Button type="scta">scta button</Button>
      </Sep>
      <Sep>
        <Button type="ghst">ghst button</Button>
      </Sep>
      <Sep>
        <Button type="link">link button</Button>
      </Sep>
    </div>
  ))
