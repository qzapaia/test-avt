import withReadme from 'storybook-readme/with-readme'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import React from 'react'
import { withState, compose } from 'recompose';

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

// el enhace aplica todos los HOC de recompose ,
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

storiesOf('{{storyPath}}{{componentName}}', module)
  .add('Default', addReadme(() => (
    <{{componentName}}WithState></{{componentName}}WithState>
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
