import React from 'react';
import GlobalTestWithData from '../../global/Test/withData';
import { ThemeProvider } from 'styled-components';
import customizationTheme from './theme';

export default (props) => (
  <ThemeProvider theme={customizationTheme}>
    <GlobalTestWithData {...props} />
  </ThemeProvider>
)
