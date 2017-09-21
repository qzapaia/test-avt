import React from 'react'
import addReadme from 'storybook-readme/with-readme'

import { Provider as ApolloProvider } from './apollo-client'
import { ThemeProvider } from 'styled-components'

const createDecorator = config => (story,b,c,d) => {

  const newStory = () => (
    <ApolloProvider>
      <ThemeProvider theme={config.theme}>
        {story()}
      </ThemeProvider>
    </ApolloProvider>
  )

  return addReadme(config.readme)(newStory,b,c,d);
}

export default createDecorator;
