
import React from 'react';
import GlobalSearchResults from '../../global/SearchResults';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSearchResults {...props} />
  </ThemeProvider>
)

  