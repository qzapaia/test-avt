import React from 'react'
import addReadme from 'storybook-readme/with-readme'

import { Provider as ApolloProvider } from './apollo-client'
import { ThemeProvider } from 'styled-components'

import _ from 'lodash';
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

const createDecorator = config => (story,b,c,d) => {

  const newStory = () => (
    <ApolloProvider>
      <ThemeProvider theme={config.theme}>
        {story()}
      </ThemeProvider>
    </ApolloProvider>
  )

  const decorator = addReadme(config.readme);

  return decorator(newStory,b,c,d);

}

export default createDecorator;
