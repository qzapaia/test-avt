import React from "react";
import addReadme from "storybook-readme/with-readme";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider as ApolloProvider } from "./apollo-client";
import { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";
import { get } from 'lodash';
import 'babel-polyfill';
import { actionsByAction } from './redux.middlewares';

const composeEnhancers = window.top.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {}

const analyticsMiddleware = actionsByAction({
  TEST_ACTION(a){
    console.log('TEST ACTION, ACA LE MANDÁ EL ANALYTICS LE MANDÁ', a);
  }
})

const createDecorator = config => (story, b, c, d) => {
  const { reducer } = config;

  const store = createStore(
    reducer ? combineReducers(reducer) : state=>state,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, analyticsMiddleware)
    )
  );

  const newStory = () => (
    <ApolloProvider store={store}>
      <ThemeProvider theme={config.theme}>{story()}</ThemeProvider>
    </ApolloProvider>
  );

  return addReadme(config.readme)(newStory, b, c, d);
};

export default createDecorator;
