
import React from 'react';
import GlobalFlightClusterRouteOption from '../../global/FlightClusterRouteOption';
import { ThemeProvider } from 'styled-components';

const componentTheme = {}

export default (props) => (
  <ThemeProvider theme={componentTheme}>
    <GlobalFlightClusterRouteOption {...props} />
  </ThemeProvider>
)

  