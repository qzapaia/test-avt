import React from 'react';
import GlobalSearchResults from '../../global/SearchResults';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalSearchResults {...props} />
  </ThemeProvider>
)
