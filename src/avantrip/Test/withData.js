import React from 'react';
import GlobalTestWithData from '../../global/Test/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalTestWithData {...props} />
  </ThemeProvider>
)
