import React from 'react'
import Color from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components';

import theme from '../styled.theme';
import readme from './README.md'

import generalDecorator from '../../stories.decorator.js';

const DemoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

storiesOf('quiero/styled@Colors', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <DemoContainer>
      <Color color="brand">brand</Color>
      <Color color="primary">primary</Color>
      <Color color="secondary">secondary</Color>
      <Color color="alert">alert</Color>
      <Color color="success">success</Color>
      <Color color="warning">warning</Color>
      <Color color="danger">danger</Color>
    </DemoContainer>
  ))
