import React from 'react'
import Text from './'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components';

import generalDecorator from '../../stories.decorator.js';

import theme from '../styled.theme';
import readme from './README.md'

const DemoContainer = styled.div`
  line-height: 1.5;
`

storiesOf('avantrip/styled@Text', module)
  .addDecorator(generalDecorator({
    readme,
    theme
  }))
  .add('Default', () => (
    <DemoContainer>
      <Text type="hxxl">hxxl - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="xxl">xxl - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="xl">xl - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="l">l - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="m">m - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="s">s - Lorem ipsum dolor sit amet</Text><br/>
      <Text type="xs">xs - Lorem ipsum dolor sit amet</Text><br/>
    </DemoContainer>
  ))
