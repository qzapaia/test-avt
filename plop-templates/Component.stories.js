import React from 'react'
import {{componentName}} from './'

import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

{{^styledComponent}}
import { withState, compose } from 'recompose'
{{/styledComponent}}

{{#withDataComponent}}
import { Provider as ApolloProvider } from '../../apollo-client'
import {{componentName}}WithData from './withData'
{{/withDataComponent}}
import { ThemeProvider } from 'styled-components'

import theme from '../styled.theme';
import readme from './README.md'

const addReadme = comp => withReadme(readme, comp);

{{^styledComponent}}
// el enhace concatena hocs de recompose,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('counter','increment',0);
const {{componentName}}WithState =  enhace((props) => {
  // enchufar tu component con el estado simulado
  const { counter, increment } = props;

  const clickHandler = () => {
    action('click')(counter+1);
    increment(counter+1);
  }

  return (
    <{{componentName}} {...props} text={counter} onClick={clickHandler}>
      {{componentName}} component
    </{{componentName}}>
  )
})
{{/styledComponent}}

storiesOf('{{storyPath}}{{componentName}}', module)
  .add('Default', addReadme(() => (
    <ThemeProvider theme={theme}>
      {{^styledComponent}}
      <{{componentName}}WithState></{{componentName}}WithState>
      {{/styledComponent}}
      {{#styledComponent}}
      <{{componentName}}>{{componentName}} component</{{componentName}}>
      {{/styledComponent}}
    </ThemeProvider>
  )))

  {{#withDataComponent}}
  .add('With data', addReadme(() => (
    <ThemeProvider theme={theme}>
      <ApolloProvider>
        <{{componentName}}WithData>{{componentName}}WithData component</{{componentName}}WithData>
      </ApolloProvider>
    </ThemeProvider>
  )))
  {{/withDataComponent}}
