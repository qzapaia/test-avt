import React from 'react';
import GlobalFlightsFiltersWithData from '../../global/FlightsFilters/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFlightsFiltersWithData {...props} />
  </ThemeProvider>
)
