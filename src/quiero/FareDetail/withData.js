import React from 'react';
import GlobalFareDetailWithData from '../../global/FareDetail/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFareDetailWithData {...props} />
  </ThemeProvider>
)
