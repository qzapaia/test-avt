import React from 'react'
import Test from './'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { withState, compose } from 'recompose'

import { Provider as ApolloProvider } from '../../apollo-client'
import { ThemeProvider } from 'styled-components'

import TestWithData from './withData'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);

// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('counter','increment',0);
const TestWithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <Test {...props} text={counter} onClick={clickHandler}>
      Test component
    </Test>
  )
})

storiesOf('global/Test', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      <TestWithState></TestWithState>
    </ThemeProvider>
  )))

  .add('With data', addReadme(() => (
    <ThemeProvider theme={theme}>
      <ApolloProvider>
        <TestWithData>TestWithData component</TestWithData>
      </ApolloProvider>
    </ThemeProvider>
  )))
