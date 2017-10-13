import React from 'react';
import GlobalSearchResultsWithData from '../../global/SearchResults/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalSearchResultsWithData {...props} />
  </ThemeProvider>
)
