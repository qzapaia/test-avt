
import React from 'react';
import GlobalFlightClusterRoute from '../../global/FlightClusterRoute';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFlightClusterRoute {...props} />
  </ThemeProvider>
)

  