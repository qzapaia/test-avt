import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'

import {{componentName}} from './'

{{#redux}}
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import * as actions from './actions'
import reducer from './reducer'
{{/redux}}

{{#withDataComponent}}
import {{componentName}}WithData from './withData'
import { Provider as ApolloProvider } from '../../apollo-client'
{{/withDataComponent}}

import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

{{#redux}}
const store = createStore(reducer);
{{/redux}}

storiesOf('{{storyPath}}{{componentName}}', module)
  .add('Default', addReadme(() => (
    <{{componentName}}>{{componentName}} component</{{componentName}}>
  )))
  {{#redux}}
  .add('WithRedux', addReadme(() => (
    <Provider store={store}>
      <{{componentName}} onClick={()=>{store.dispatch(actions.setData('pepe'))}}>{{componentName}} component</{{componentName}}>
    </Provider>
  )))
  {{/redux}}
  {{#withDataComponent}}
  .add('With data', addReadme(() => (
    <ApolloProvider>
      <{{componentName}}WithData>{{componentName}}WithData component</{{componentName}}WithData>
    </ApolloProvider>
  )))
  {{/withDataComponent}}
