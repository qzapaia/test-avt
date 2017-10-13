import React from 'react';
import GlobalFlightClusterWithData from '../../global/FlightCluster/withData';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <GlobalFlightClusterWithData {...props} />
  </ThemeProvider>
)
