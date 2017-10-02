
import React from 'react';
import GlobalSearchResultsPlaceHolder from '../../global/SearchResultsPlaceHolder';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalSearchResultsPlaceHolder {...props} />
  </ThemeProvider>
)

  