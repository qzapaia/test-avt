import React from 'react'
import Text from './'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import { ThemeProvider } from 'styled-components'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);


storiesOf('avantrip/styled/Text', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <Text>Text component</Text>
    </ThemeProvider>
  )))

