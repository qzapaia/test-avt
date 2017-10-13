import React from 'react';
import GlobalFlightCluster from '../../global/FlightCluster';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFlightCluster {...props} />
  </ThemeProvider>
)
