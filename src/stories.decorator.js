import React from "react";
import addReadme from "storybook-readme/with-readme";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider as ApolloProvider } from "./apollo-client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";

const devToolsExtension = window.top.__REDUX_DEVTOOLS_EXTENSION__
const initialState = {}

const createDecorator = config => (story, b, c, d) => {
  const store = createStore(
    combineReducers(config.reducer || {}),
    initialState,
    compose(
      applyMiddleware(thunk),
      devToolsExtension && devToolsExtension()
    )
  );

  const newStory = () => (
    <Provider store={store}>
      <ApolloProvider>
        <ThemeProvider theme={config.theme}>{story()}</ThemeProvider>
      </ApolloProvider>
    </Provider>
  );

  return addReadme(config.readme)(newStory, b, c, d);
};

export default createDecorator;
