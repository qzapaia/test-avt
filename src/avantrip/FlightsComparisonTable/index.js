
import React from 'react';
import GlobalFlightsComparisonTable from '../../global/FlightsComparisonTable';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFlightsComparisonTable {...props} />
  </ThemeProvider>
)

  