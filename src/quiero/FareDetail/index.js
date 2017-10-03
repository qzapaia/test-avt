import React from 'react';
import GlobalFareDetail from '../../global/FareDetail';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFareDetail {...props} />
  </ThemeProvider>
)
