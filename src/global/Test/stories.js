import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withState, compose } from 'recompose';

import Test from './'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import * as actions from './actions'
import reducer from './reducer'

import TestWithData from './withData'
import { Provider as ApolloProvider } from '../../apollo-client'

import readme from './README.md';

const addReadme = comp => withReadme(readme, comp);

const store = createStore(reducer);

// el enhace aplica todos los HOC de recompose ,
// en este caso le inyecta un estado falso
// ver más en https://github.com/acdlite/recompose
const enhace = withState('counter','increment',0);
const TestWithState =  enhace((props) => {
  // enchufar tu com con el estado "falso"
  const { counter, increment } = props;

  return (
    <Test {...props} text={counter} onClick={()=>increment(counter+1)}>
      Test component
    </Test>
  )
})

storiesOf('global/Test', module)
  .add('Default', addReadme(() => (
    <TestWithState></TestWithState>
  )))
  .add('WithRedux', addReadme(() => (
    <Provider store={store}>
      <Test onClick={()=>{store.dispatch(actions.setData('pepe'))}}>Test component</Test>
    </Provider>
  )))
  .add('With data', addReadme(() => (
    <ApolloProvider>
      <TestWithData>TestWithData component</TestWithData>
    </ApolloProvider>
  )))
