import React from 'react';
import GlobalFlightsFilters from '../../global/FlightsFilters';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFlightsFilters {...props} />
  </ThemeProvider>
)
